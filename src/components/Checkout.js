import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import commerce from '../lib/commerce';
import { FaLock, FaTruck, FaCreditCard } from 'react-icons/fa';

export const Container = styled.div`
  background-color: #000;
  color: #00ff00;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Courier New', monospace;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ff00;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StepIcon = styled.div`
  background-color: ${props => props.$active ? '#00ff00' : '#003300'};
  color: ${props => props.$active ? '#000' : '#00ff00'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;

export const StepLabel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.$active ? '#00ff00' : '#006600'};
`;

export const FormContainer = styled.form`
  background-color: rgba(0, 50, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: rgba(0, 20, 0, 0.8);
  border: 1px solid #00ff00;
  color: #00ff00;
  font-family: 'Courier New', monospace;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00ff00;
  }
`;

export const Button = styled.button`
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background-color: #00cc00;
    box-shadow: 0 0 15px #00ff00;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: rgba(0, 20, 0, 0.8);
  border: 1px solid #00ff00;
  color: #00ff00;
  font-family: 'Courier New', monospace;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00ff00;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 1rem;
`;

const Checkout = ({ cart, onCaptureCheckout }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        subdivision: ''
    });
    const [shippingCountries, setShippingCountries] = useState({});
    const [shippingSubdivisions, setShippingSubdivisions] = useState({});
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const steps = ['Shipping address', 'Payment details', 'Review your order'];

    const fetchShippingOptions = useCallback(async (checkoutTokenId, country, region = null) => {
        if (!country) return;
        try {
            const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
            setShippingOptions(options);
            setShippingOption(options[0]?.id || '');
        } catch (error) {
            console.error('Error fetching shipping options', error);
            setError('Error fetching shipping options. Please try again.');
        }
    }, []);

    const fetchSubdivisions = useCallback(async (countryCode) => {
        if (!countryCode) return;
        try {
            const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
            setShippingSubdivisions(subdivisions);
            const firstSubdivision = Object.keys(subdivisions)[0];
            setShippingData(prev => ({ ...prev, subdivision: firstSubdivision || '' }));
            if (checkoutToken) {
                fetchShippingOptions(checkoutToken.id, countryCode, firstSubdivision);
            }
        } catch (error) {
            console.error('Error fetching subdivisions', error);
            setError('Error fetching subdivisions. Please try again.');
        }
    }, [checkoutToken, fetchShippingOptions]);

    const fetchShippingCountries = useCallback(async (checkoutTokenId) => {
        try {
            const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
            setShippingCountries(countries);
            const firstCountry = Object.keys(countries)[0];
            setShippingData(prev => ({ ...prev, country: firstCountry }));
            await fetchSubdivisions(firstCountry);
        } catch (error) {
            console.error('Error fetching shipping countries', error);
            setError('Error fetching shipping countries. Please try again.');
        }
    }, [fetchSubdivisions]);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
                await fetchShippingCountries(token.id);
            } catch (error) {
                console.error('There was an error in generating a token', error);
                setError('Error generating checkout. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        if (cart?.id) {
            generateToken();
        }
    }, [cart, fetchShippingCountries]);

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

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentData(prev => ({ ...prev, [name]: value }));
    };

    const handleShippingSubmit = (e) => {
        e.preventDefault();
        if (!shippingData.country || !shippingData.subdivision || !shippingOption) {
            setError('Please fill in all required fields');
            return;
        }
        handleNext();
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        handleNext();
    };

    const handleCaptureCheckout = async () => {
        try {
            const orderData = {
                line_items: checkoutToken.live.line_items,
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
                fulfillment: {
                    shipping_method: shippingOption
                },
                payment: {
                    gateway: 'test_gateway',
                    card: {
                        number: paymentData.cardNumber,
                        expiry_month: paymentData.expiryDate.split('/')[0],
                        expiry_year: paymentData.expiryDate.split('/')[1],
                        cvc: paymentData.cvv,
                        postal_zip_code: shippingData.postalCode
                    }
                }
            };
            await onCaptureCheckout(checkoutToken.id, orderData);
            handleNext();
        } catch (error) {
            console.error('Error capturing checkout', error);
            setError('Error processing your order. Please try again.');
        }
    };

    const renderForm = () => {
        switch (activeStep) {
            case 0:
                return (
                    <FormContainer onSubmit={handleShippingSubmit}>
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
                            <option value="">Select Subdivision</option>
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
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <Button type="submit">Next</Button>
                    </FormContainer>
                );
            case 1:
                return (
                    <FormContainer onSubmit={handlePaymentSubmit}>
                        <Input name="cardNumber" placeholder="Card Number" required value={paymentData.cardNumber} onChange={handlePaymentChange} />
                        <Input name="expiryDate" placeholder="Expiry Date (MM/YY)" required value={paymentData.expiryDate} onChange={handlePaymentChange} />
                        <Input name="cvv" placeholder="CVV" required value={paymentData.cvv} onChange={handlePaymentChange} />
                        <Button type="button" onClick={handleBack}>Back</Button>
                        <Button type="submit">Next</Button>
                    </FormContainer>
                );
            case 2:
                return (
                    <FormContainer>
                        <h3>Review Your Order</h3>
                        <p>Shipping to: {shippingData.address}, {shippingData.city}, {shippingData.postalCode}</p>
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
        <div>
            <h3>Thank you for your purchase!</h3>
            <p>Order ref: {checkoutToken && checkoutToken.id}</p>
        </div>
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (!checkoutToken) return <div>Loading...</div>;

    return (
        <Container>
            <Title>Checkout</Title>
            <StepContainer>
                {steps.map((step, index) => (
                    <Step key={step}>
                        <StepIcon $active={activeStep >= index}>
                            {index === 0 && <FaTruck />}
                            {index === 1 && <FaCreditCard />}
                            {index === 2 && <FaLock />}
                        </StepIcon>
                        <StepLabel $active={activeStep >= index}>{step}</StepLabel>
                    </Step>
                ))}
            </StepContainer>
            {activeStep === steps.length ? <Confirmation /> : renderForm()}
        </Container>
    );
};

export default Checkout;