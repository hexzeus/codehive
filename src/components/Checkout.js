import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import commerce from '../lib/commerce';
import { FaLock, FaTruck, FaCreditCard } from 'react-icons/fa';

const Container = styled.div`
  background-color: #000;
  color: #00ff00;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Courier New', monospace;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ff00;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const StepIcon = styled.div`
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

const StepLabel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.$active ? '#00ff00' : '#006600'};
`;

const FormContainer = styled.form`
  background-color: rgba(0, 50, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const Input = styled.input`
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

const Button = styled.button`
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

const Checkout = ({ cart }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({
        address: '',
        city: '',
        postalCode: ''
    });
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const steps = ['Shipping address', 'Payment details', 'Review your order'];

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
                console.log('There was an error in generating a token', error);
            }
        };

        if (cart) {
            generateToken();
        }
    }, [cart]);

    const handleNext = () => setActiveStep(prevStep => prevStep + 1);
    const handleBack = () => setActiveStep(prevStep => prevStep - 1);

    const handleShippingChange = (e) => {
        setShippingData({ ...shippingData, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    };

    const handleShippingSubmit = (e) => {
        e.preventDefault();
        handleNext();
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        handleNext();
    };

    const renderForm = () => {
        switch (activeStep) {
            case 0:
                return (
                    <FormContainer onSubmit={handleShippingSubmit}>
                        <Input name="address" placeholder="Address" required value={shippingData.address} onChange={handleShippingChange} />
                        <Input name="city" placeholder="City" required value={shippingData.city} onChange={handleShippingChange} />
                        <Input name="postalCode" placeholder="Postal Code" required value={shippingData.postalCode} onChange={handleShippingChange} />
                        <Button type="submit">Next</Button>
                    </FormContainer>
                );
            case 1:
                return (
                    <FormContainer onSubmit={handlePaymentSubmit}>
                        <Input name="cardNumber" placeholder="Card Number" required value={paymentData.cardNumber} onChange={handlePaymentChange} />
                        <Input name="expiryDate" placeholder="Expiry Date" required value={paymentData.expiryDate} onChange={handlePaymentChange} />
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
                        <Button type="button" onClick={handleNext}>Place Order</Button>
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