import React, { useState, useEffect, useCallback } from 'react';
import commerce from '../lib/commerce';
import Cart from '../components/Cart';
import {
    Container,
    ProductSection,
    ProductCard,
    ProductImage,
    ProductName,
    ProductPrice,
    CTAButton,
    LoadingSpinner,
    ErrorMessage
} from '../styles/StoreFrontStyles';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await commerce.products.list();
            setProducts(data);
            setError(null);
        } catch (error) {
            console.error('There was an error fetching the products', error);
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchCart = useCallback(async () => {
        try {
            const cart = await commerce.cart.retrieve();
            setCart(cart);
        } catch (error) {
            console.error('There was an error fetching the cart', error);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [fetchProducts, fetchCart]);

    const handleAddToCart = useCallback(async (productId) => {
        try {
            const { cart } = await commerce.cart.add(productId, 1);
            setCart(cart);
        } catch (error) {
            console.error('There was an error adding the item to the cart', error);
        }
    }, []);

    return (
        <Container>
            <ProductSection>
                <h2>Our Products</h2>
                {loading && <LoadingSpinner />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {!loading && !error && products && products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id}>
                            {product.image && (
                                <ProductImage
                                    src={product.image.url}
                                    alt={product.name}
                                />
                            )}
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
                            <CTAButton onClick={() => handleAddToCart(product.id)}>
                                Add to Cart
                            </CTAButton>
                        </ProductCard>
                    ))
                ) : (
                    !loading && !error && <p>No products available at the moment.</p>
                )}
            </ProductSection>
            <Cart cart={cart} />
        </Container>
    );
};

export default StoreFront;