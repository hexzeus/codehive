import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LazyLoad from 'react-lazyload';
import commerce from '../lib/commerce';
import { AnimatePresence } from 'framer-motion';
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
    CategoryFilter,
    SearchBar,
    PlaceholderImage,
    LoadingContainer,
    LoadingText,
    AddedToCartMessage,
    LoadingOverlay,
    LoadingSpinnerOverlay
} from '../styles/StoreFrontStyles';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([{ id: 'all', name: 'All' }]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [addedToCart, setAddedToCart] = useState(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const { data: productsData } = await commerce.products.list();
            setProducts(productsData);

            const uniqueCategories = [...new Set(productsData.flatMap(product =>
                product.categories.map(category => JSON.stringify({ id: category.id, name: category.name }))
            ))].map(JSON.parse);

            setCategories(prevCategories => {
                const allCategory = prevCategories.find(cat => cat.id === 'all');
                return allCategory
                    ? [allCategory, ...uniqueCategories]
                    : [{ id: 'all', name: 'All' }, ...uniqueCategories];
            });

            setError(null);
        } catch (error) {
            console.error('There was an error fetching the data', error);
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleAddToCart = useCallback(async (productId, quantity = 1) => {
        try {
            setIsAddingToCart(true);
            await commerce.cart.add(productId, quantity);
            setAddedToCart(productId);
            setTimeout(() => setAddedToCart(null), 2000);
        } catch (error) {
            console.error('There was an error adding the item to the cart', error);
            setError('Failed to add item to cart. Please try again.');
        } finally {
            setIsAddingToCart(false);
        }
    }, []);

    const filteredProducts = useMemo(() => {
        return products
            .filter(product => selectedCategory === 'all' || product.categories.some(cat => cat.id === selectedCategory))
            .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [products, selectedCategory, searchTerm]);

    const handleCategoryChange = useCallback((categoryId) => {
        setSelectedCategory(categoryId);
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleImageError = useCallback((e) => {
        e.target.onerror = null;
        e.target.src = '/path/to/fallback/image.jpg';
    }, []);

    if (loading) {
        return (
            <LoadingContainer>
                <LoadingSpinner />
                <LoadingText>Loading products...</LoadingText>
            </LoadingContainer>
        );
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
        <Container>
            <h1>Our Premium Collection</h1>
            <CategoryFilter>
                {categories.map(category => (
                    <CTAButton
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        $active={selectedCategory === category.id}
                    >
                        {category.name}
                    </CTAButton>
                ))}
            </CategoryFilter>
            <SearchBar
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ProductGrid>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <LazyLoad
                            height={250}
                            once
                            placeholder={<PlaceholderImage />}
                            debounce={300}
                        >
                            <ProductImage
                                src={product.image?.url}
                                alt={product.name}
                                onError={handleImageError}
                            />
                        </LazyLoad>
                        <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
                            <CTAButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart(product.id);
                                }}
                                $loading={isAddingToCart}
                            >
                                {isAddingToCart && addedToCart === product.id ? (
                                    <>
                                        <LoadingOverlay>
                                            <LoadingSpinnerOverlay />
                                        </LoadingOverlay>
                                        Loading...
                                    </>
                                ) : (
                                    'Add to Cart'
                                )}
                            </CTAButton>
                            <AnimatePresence>
                                {addedToCart === product.id && (
                                    <AddedToCartMessage
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Added to Cart!
                                    </AddedToCartMessage>
                                )}
                            </AnimatePresence>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductGrid>
        </Container>
    );
};

export default StoreFront;