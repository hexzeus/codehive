import React, { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../lib/printfulClient';
import axios from 'axios';
import {
    Container,
    ProductGrid,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    CTAButton,
    LoadingSpinner,
    ErrorMessage,
    SearchBar,
    CartItem,
    CartTotal,
    CheckoutButton,
    CartToggle,
    CartDropdown,
    RemoveFromCartButton,
    EmptyCartMessage,
    CheckoutForm,
    FormInput,
    FormLabel,
    SubmitButton,
    Modal,
    ModalContent,
    CloseButton
} from '../styles/StoreFront2Styles';

const StoreFront2 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const productsData = await getProducts();
            setProducts(productsData);
            setError(null);
        } catch (error) {
            console.error('Error fetching Printful products:', error);
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const addToCart = useCallback((product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }, []);

    const getTotalPrice = useCallback(() => {
        return cart.reduce((total, item) => total + item.retail_price * item.quantity, 0).toFixed(2);
    }, [cart]);

    const handleCheckout = useCallback(() => {
        setShowCheckoutForm(true);
        setIsCartOpen(false);
    }, []);

    const handleFormChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }, []);

    const validateForm = useCallback(() => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (!formData.address.trim()) errors.address = "Address is required";
        if (!formData.city.trim()) errors.city = "City is required";
        if (!formData.state.trim()) errors.state = "State is required";
        if (!formData.country.trim()) errors.country = "Country is required";
        if (!formData.zip.trim()) errors.zip = "ZIP code is required";
        return errors;
    }, [formData]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setIsCheckingOut(true);
            try {
                const response = await axios.post('/api/create-printful-order', {
                    items: cart,
                    recipient: formData
                });
                setIsCheckingOut(false);
                setCart([]);
                setShowCheckoutForm(false);
                setShowConfirmation(true);
                console.log('Order created:', response.data);
            } catch (error) {
                console.error('Error creating order:', error);
                setError('An error occurred while processing your order. Please try again.');
                setIsCheckingOut(false);
            }
        } else {
            setFormErrors(errors);
        }
    }, [validateForm, cart, formData]);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;

    return (
        <Container>
            <CartToggle onClick={() => setIsCartOpen(!isCartOpen)}>
                Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </CartToggle>
            {isCartOpen && (
                <CartDropdown>
                    {cart.length === 0 ? (
                        <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
                    ) : (
                        <>
                            {cart.map(item => (
                                <CartItem key={item.id}>
                                    <ProductImage src={item.thumbnail_url} alt={item.name} />
                                    <ProductInfo>
                                        <ProductName>{item.name}</ProductName>
                                        <ProductPrice>${item.retail_price} x {item.quantity}</ProductPrice>
                                    </ProductInfo>
                                    <RemoveFromCartButton onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </RemoveFromCartButton>
                                </CartItem>
                            ))}
                            <CartTotal>Total: ${getTotalPrice()}</CartTotal>
                            <CheckoutButton onClick={handleCheckout}>
                                Proceed to Checkout
                            </CheckoutButton>
                        </>
                    )}
                </CartDropdown>
            )}
            <h1>Printful Products</h1>
            <SearchBar
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ProductGrid>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductImage src={product.thumbnail_url} alt={product.name} />
                        <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>${product.retail_price}</ProductPrice>
                            <CTAButton onClick={() => addToCart(product)}>
                                Add to Cart
                            </CTAButton>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductGrid>
            {showCheckoutForm && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={() => setShowCheckoutForm(false)}>×</CloseButton>
                        <CheckoutForm onSubmit={handleSubmit}>
                            <FormLabel>
                                Name:
                                <FormInput
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                />
                                {formErrors.name && <span>{formErrors.name}</span>}
                            </FormLabel>
                            <FormLabel>
                                Email:
                                <FormInput
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                />
                                {formErrors.email && <span>{formErrors.email}</span>}
                            </FormLabel>
                            <FormLabel>
                                Address:
                                <FormInput
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleFormChange}
                                />
                                {formErrors.address && <span>{formErrors.address}</span>}
                            </FormLabel>
                            <FormLabel>
                                City:
                                <FormInput
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleFormChange}
                                />
                                {formErrors.city && <span>{formErrors.city}</span>}
                            </FormLabel>
                            <FormLabel>
                                State:
                                <FormInput
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleFormChange}
                                />
                                {formErrors.state && <span>{formErrors.state}</span>}
                            </FormLabel>
                            <FormLabel>
                                Country:
                                <FormInput
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleFormChange}
                                />
                                {formErrors.country && <span>{formErrors.country}</span>}
                            </FormLabel>
                            <FormLabel>
                                ZIP Code:
                                <FormInput
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleFormChange}
                                />
                                {formErrors.zip && <span>{formErrors.zip}</span>}
                            </FormLabel>
                            <SubmitButton type="submit" disabled={isCheckingOut}>
                                {isCheckingOut ? 'Processing...' : 'Place Order'}
                            </SubmitButton>
                        </CheckoutForm>
                    </ModalContent>
                </Modal>
            )}
            {showConfirmation && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={() => setShowConfirmation(false)}>×</CloseButton>
                        <h2>Thank you for your purchase!</h2>
                        <p>Your order has been successfully processed.</p>
                    </ModalContent>
                </Modal>
            )}
        </Container>
    );
};

export default StoreFront2;