import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LazyLoad from 'react-lazyload';
import commerce from '../lib/commerce';
import Cart from '../components/Cart';
import ProductModal from '../components/ProductModal';
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
} from '../styles/StoreFrontStyles';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categories, setCategories] = useState([{ id: 'all', name: 'All' }]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleAddToCart = useCallback(async (productId, quantity = 1) => {
        try {
            const { cart } = await commerce.cart.add(productId, quantity);
            setCart(cart);
        } catch (error) {
            console.error('There was an error adding the item to the cart', error);
            setError('Failed to add item to cart. Please try again.');
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

    const handleProductSelect = useCallback((product) => {
        setSelectedProduct(product);
    }, []);

    const handleModalClose = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    const handleImageError = useCallback((e) => {
        e.target.onerror = null;
        e.target.src = '/path/to/fallback/image.jpg'; // Replace with your fallback image path
    }, []);

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
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {!loading && !error && (
                <ProductGrid>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} onClick={() => handleProductSelect(product)}>
                            <LazyLoad
                                height={200}
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
                                <CTAButton onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }}>
                                    Add to Cart
                                </CTAButton>
                            </ProductInfo>
                        </ProductCard>
                    ))}
                </ProductGrid>
            )}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleModalClose}
                    onAddToCart={handleAddToCart}
                />
            )}
            <Cart cart={cart} />
        </Container>
    );
};

export default StoreFront;