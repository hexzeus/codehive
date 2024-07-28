import React, { useState } from 'react';
import {
    ModalOverlay,
    ModalContent,
    ModalImage,
    ModalClose,
    ProductName,
    ProductPrice,
    CTAButton,
    QuantityControl
} from '../styles/StoreFrontStyles';

const ProductModal = ({ product, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalClose onClick={onClose}>&times;</ModalClose>
                <ModalImage src={product.image.url} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
                <p>{product.description}</p>
                <QuantityControl>
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </QuantityControl>
                <CTAButton onClick={() => onAddToCart(product.id, quantity)}>
                    Add to Cart
                </CTAButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ProductModal;