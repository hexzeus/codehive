import React, { useState, useEffect, useCallback } from 'react';
import { FaLock, FaTruck, FaCreditCard } from 'react-icons/fa';
import commerce from '../lib/commerce';
import {
    Container,
    Title,
    StepContainer,
    Step,
    StepIcon,
    StepLabel,
    FormContainer,
    Input,
    Button,
    Select,
    ErrorMessage,
    LoadingContainer,
    LoadingSpinner,
    LoadingText,
    ConfirmationContainer,
    ConfirmationTitle,
    ConfirmationText
} from '../styles/CheckoutStyles';

const Checkout = ({ cart, onCaptureCheckout }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({
        firstName: '', lastName: '', email: '', address: '',
        city: '', postalCode: '', country: '', subdivision: ''
    });
    const [billingData, setBillingData] = useState({
        firstName: '', lastName: '', address: '',
        city: '', postalCode: '', country: '', subdivision: ''
    });
    const [shippingCountries, setShippingCountries] = useState({});
    const [shippingSubdivisions, setShippingSubdivisions] = useState({});
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const [paymentData, setPaymentData] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [orderComplete, setOrderComplete] = useState(false);

    const steps = ['Shipping address', 'Billing address', 'Payment details', 'Review your order'];

    const refreshCart = useCallback(async () => {
        try {
            const newCart = await commerce.cart.refresh();
            return newCart;
        } catch (error) {
            console.error('Error refreshing cart', error);
            setError('Error refreshing cart. Please try again.');
            return null;
        }
    }, []);

    const generateToken = useCallback(async (cartId) => {
        try {
            const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });
            setCheckoutToken(token);
            return token;
        } catch (error) {
            console.error('Error generating token', error);
            setError('Error initializing checkout. Please try again.');
            return null;
        }
    }, []);

    const fetchShippingCountries = useCallback(async (checkoutTokenId) => {
        try {
            const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
            setShippingCountries(countries);
            const firstCountry = Object.keys(countries)[0];
            setShippingData(prev => ({ ...prev, country: firstCountry }));
            setBillingData(prev => ({ ...prev, country: firstCountry }));
            return firstCountry;
        } catch (error) {
            console.error('Error fetching shipping countries', error);
            setError('Error fetching shipping countries. Please try again.');
            return null;
        }
    }, []);

    const fetchSubdivisions = useCallback(async (countryCode) => {
        try {
            const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
            setShippingSubdivisions(subdivisions);
            const firstSubdivision = Object.keys(subdivisions)[0];
            setShippingData(prev => ({ ...prev, subdivision: firstSubdivision }));
            setBillingData(prev => ({ ...prev, subdivision: firstSubdivision }));
            return firstSubdivision;
        } catch (error) {
            console.error('Error fetching subdivisions', error);
            setError('Error fetching subdivisions. Please try again.');
            return null;
        }
    }, []);

    const fetchShippingOptions = useCallback(async (checkoutTokenId, country, region = null) => {
        try {
            const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
            setShippingOptions(options);
            setShippingOption(options[0]?.id || '');
        } catch (error) {
            console.error('Error fetching shipping options', error);
            setError('Error fetching shipping options. Please try again.');
        }
    }, []);

    const initializeCheckout = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            let currentCart = cart;
            if (!currentCart || !currentCart.id) {
                currentCart = await refreshCart();
                if (!currentCart) {
                    throw new Error('Unable to create or refresh cart');
                }
            }

            const token = await generateToken(currentCart.id);
            if (!token) {
                throw new Error('Unable to generate checkout token');
            }

            const shippingCountry = await fetchShippingCountries(token.id);
            if (!shippingCountry) {
                throw new Error('Unable to fetch shipping countries');
            }

            const subdivision = await fetchSubdivisions(shippingCountry);
            if (!subdivision) {
                throw new Error('Unable to fetch subdivisions');
            }

            await fetchShippingOptions(token.id, shippingCountry, subdivision);
        } catch (error) {
            console.error('Error initializing checkout', error);
            setError(`Error initializing checkout: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }, [cart, refreshCart, generateToken, fetchShippingCountries, fetchSubdivisions, fetchShippingOptions]);

    useEffect(() => {
        initializeCheckout();
    }, [initializeCheckout]);

    const handleNext = () => setActiveStep(prevStep => prevStep + 1);
    const handleBack = () => setActiveStep(prevStep => prevStep - 1);

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingData(prev => ({ ...prev, [name]: value }));
        if (name === 'country') {
            fetchSubdivisions(value);
        } else if (name === 'subdivision' && checkoutToken) {
            fetchShippingOptions(checkoutToken.id, shippingData.country, value);
        }
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingData(prev => ({ ...prev, [name]: value }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNext();
    };

    const validateData = () => {
        if (shippingData.subdivision !== billingData.subdivision) {
            setError('Shipping and billing states must match.');
            return false;
        }
        return true;
    };

    const handleCaptureCheckout = async () => {
        setLoading(true);
        setError('');
        if (!validateData()) {
            setLoading(false);
            return;
        }
        try {
            const orderData = {
                line_items: checkoutToken.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email
                },
                shipping: {
                    name: `${shippingData.firstName} ${shippingData.lastName}`,
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: shippingData.subdivision,
                    postal_zip_code: shippingData.postalCode,
                    country: shippingData.country
                },
                billing: {
                    name: `${billingData.firstName} ${billingData.lastName}`,
                    street: billingData.address,
                    town_city: billingData.city,
                    county_state: billingData.subdivision,
                    postal_zip_code: billingData.postalCode,
                    country: billingData.country
                },
                fulfillment: { shipping_method: shippingOption },
                payment: {
                    gateway: 'test_gateway',
                    card: {
                        number: paymentData.cardNumber,
                        expiry_month: paymentData.expiryDate.split('/')[0],
                        expiry_year: paymentData.expiryDate.split('/')[1],
                        cvc: paymentData.cvv,
                        postal_zip_code: billingData.postalCode
                    }
                }
            };

            const order = await commerce.checkout.capture(checkoutToken.id, orderData);
            if (typeof onCaptureCheckout === 'function') {
                onCaptureCheckout(order);
            }
            setOrderComplete(true);
            handleNext();
        } catch (error) {
            console.error('Error capturing checkout', error);
            setError(`Error processing your order: ${error.message || 'Unknown error occurred'}`);
            if (error.statusCode === 404) {
                await initializeCheckout();
            }
        } finally {
            setLoading(false);
        }
    };

    const renderForm = () => {
        switch (activeStep) {
            case 0:
                return (
                    <FormContainer onSubmit={handleSubmit}>
                        <Input name="firstName" placeholder="First Name" required value={shippingData.firstName} onChange={handleShippingChange} />
                        <Input name="lastName" placeholder="Last Name" required value={shippingData.lastName} onChange={handleShippingChange} />
                        <Input name="email" placeholder="Email" type="email" required value={shippingData.email} onChange={handleShippingChange} />
                        <Input name="address" placeholder="Address" required value={shippingData.address} onChange={handleShippingChange} />
                        <Input name="city" placeholder="City" required value={shippingData.city} onChange={handleShippingChange} />
                        <Input name="postalCode" placeholder="Postal Code" required value={shippingData.postalCode} onChange={handleShippingChange} />
                        <Select name="country" value={shippingData.country} onChange={handleShippingChange} required>
                            <option value="">Select Country</option>
                            {Object.entries(shippingCountries).map(([code, name]) => (
                                <option key={code} value={code}>{name}</option>
                            ))}
                        </Select>
                        <Select name="subdivision" value={shippingData.subdivision} onChange={handleShippingChange} required>
                            <option value="">Select State</option>
                            {Object.entries(shippingSubdivisions).map(([code, name]) => (
                                <option key={code} value={code}>{name}</option>
                            ))}
                        </Select>
                        <Select name="shippingOption" value={shippingOption} onChange={(e) => setShippingOption(e.target.value)} required>
                            <option value="">Select Shipping Option</option>
                            {shippingOptions.map((option) => (
                                <option key={option.id} value={option.id}>{`${option.description} - ${option.price.formatted_with_symbol}`}</option>
                            ))}
                        </Select>
                        <Button type="submit">Next</Button>
                    </FormContainer>
                );
            case 1:
                return (
                    <FormContainer onSubmit={handleSubmit}>
                        <Input name="firstName" placeholder="First Name" required value={billingData.firstName} onChange={handleBillingChange} />
                        <Input name="lastName" placeholder="Last Name" required value={billingData.lastName} onChange={handleBillingChange} />
                        <Input name="address" placeholder="Address" required value={billingData.address} onChange={handleBillingChange} />
                        <Input name="city" placeholder="City" required value={billingData.city} onChange={handleBillingChange} />
                        <Input name="postalCode" placeholder="Postal Code" required value={billingData.postalCode} onChange={handleBillingChange} />
                        <Select name="country" value={billingData.country} onChange={handleBillingChange} required>
                            <option value="">Select Country</option>
                            {Object.entries(shippingCountries).map(([code, name]) => (
                                <option key={code} value={code}>{name}</option>
                            ))}
                        </Select>
                        <Select name="subdivision" value={billingData.subdivision} onChange={handleBillingChange} required>
                            <option value="">Select State</option>
                            {Object.entries(shippingSubdivisions).map(([code, name]) => (
                                <option key={code} value={code}>{name}</option>
                            ))}
                        </Select>
                        <Button type="button" onClick={handleBack}>Back</Button>
                        <Button type="submit">Next</Button>
                    </FormContainer>
                );
            case 2:
                return (
                    <FormContainer onSubmit={handleSubmit}>
                        <Input name="cardNumber" placeholder="Card Number" required value={paymentData.cardNumber} onChange={handlePaymentChange} />
                        <Input name="expiryDate" placeholder="Expiry Date (MM/YY)" required value={paymentData.expiryDate} onChange={handlePaymentChange} />
                        <Input name="cvv" placeholder="CVV" required value={paymentData.cvv} onChange={handlePaymentChange} />
                        <Button type="button" onClick={handleBack}>Back</Button>
                        <Button type="submit">Next</Button>
                    </FormContainer>
                );
            case 3:
                return (
                    <FormContainer>
                        <h3>Review Your Order</h3>
                        <p>Shipping to: {shippingData.address}, {shippingData.city}, {shippingData.subdivision}, {shippingData.postalCode}</p>
                        <p>Billing to: {billingData.address}, {billingData.city}, {billingData.subdivision}, {billingData.postalCode}</p>
                        <p>Payment: Card ending in {paymentData.cardNumber.slice(-4)}</p>
                        <Button type="button" onClick={handleBack}>Back</Button>
                        <Button type="button" onClick={handleCaptureCheckout}>Place Order</Button>
                    </FormContainer>
                );
            default:
                return null;
        }
    };

    const Confirmation = () => (
        <ConfirmationContainer>
            <ConfirmationTitle>Thank you for your purchase!</ConfirmationTitle>
            <ConfirmationText>Order ref: {checkoutToken && checkoutToken.id}</ConfirmationText>
            <Button onClick={() => window.location.href = '/'}>Back to Home</Button>
        </ConfirmationContainer>
    );

    if (loading) return (
        <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>Processing your order...</LoadingText>
        </LoadingContainer>
    );
    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (!checkoutToken) return (
        <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>Initializing checkout...</LoadingText>
        </LoadingContainer>
    );

    return (
        <Container>
            <Title>Checkout</Title>
            <StepContainer>
                {steps.map((step, index) => (
                    <Step key={step}>
                        <StepIcon $active={activeStep >= index}>
                            {index === 0 && <FaTruck />}
                            {index === 1 && <FaTruck />}
                            {index === 2 && <FaCreditCard />}
                            {index === 3 && <FaLock />}
                        </StepIcon>
                        <StepLabel $active={activeStep >= index}>{step}</StepLabel>
                    </Step>
                ))}
            </StepContainer>
            {orderComplete ? <Confirmation /> : renderForm()}
        </Container>
    );
};

export default Checkout;