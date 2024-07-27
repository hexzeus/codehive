import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import commerce from '../lib/commerce';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00ff00; }
  50% { box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
  100% { box-shadow: 0 0 5px #00ff00; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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

const CartItem = styled.div`
  background-color: rgba(0, 50, 0, 0.5);
  border: 1px solid #00ff00;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const QuantityButton = styled.button`
  background-color: transparent;
  border: 1px solid #00ff00;
  color: #00ff00;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ff00;
    color: #000;
  }
`;

const Quantity = styled.span`
  margin: 0 0.5rem;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ff3333;
    text-shadow: 0 0 10px #ff0000;
  }
`;

const Total = styled.p`
  font-size: 1.5rem;
  text-align: right;
  margin-top: 2rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

const CheckoutButton = styled.button`
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 2rem auto 0;
  animation: ${glowAnimation} 1.5s infinite;

  &:hover {
    background-color: #00cc00;
    box-shadow: 0 0 15px #00ff00;
  }
`;

const Cart = ({ fetchCart }) => {
    const [cart, setCart] = useState(null);
    const [cartCache, setCartCache] = useState(null);
    const navigate = useNavigate();

    const fetchCartData = useCallback(async () => {
        try {
            const cart = await commerce.cart.retrieve();
            setCartCache(cart);
            setCart(cart);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    }, []);

    useEffect(() => {
        if (!cartCache) {
            fetchCartData();
        } else {
            setCart(cartCache);
        }
    }, [cartCache, fetchCartData, setCart]);

    const handleUpdateCartQty = useCallback(
        async (lineItemId, quantity) => {
            try {
                // Optimistically update the cart in the UI
                setCart((prevCart) => {
                    const updatedCart = { ...prevCart };
                    const itemIndex = updatedCart.line_items.findIndex(
                        (item) => item.id === lineItemId
                    );
                    if (itemIndex !== -1) {
                        updatedCart.line_items[itemIndex].quantity = quantity;
                        updatedCart.total_items = updatedCart.line_items.reduce(
                            (total, item) => total + item.quantity,
                            0
                        );
                    }
                    return updatedCart;
                });

                // Call the Commerce.js API to update the cart
                const response = await commerce.cart.update(lineItemId, { quantity });
                setCartCache(response.cart);
                setCart(response.cart);
            } catch (error) {
                console.error('Error updating cart quantity:', error);
                // Revert the optimistic update if the API call fails
                setCart((prevCart) => {
                    const updatedCart = { ...prevCart };
                    const itemIndex = updatedCart.line_items.findIndex(
                        (item) => item.id === lineItemId
                    );
                    if (itemIndex !== -1) {
                        updatedCart.line_items[itemIndex].quantity = prevCart.line_items[itemIndex].quantity;
                        updatedCart.total_items = prevCart.total_items;
                    }
                    return updatedCart;
                });
            }
        },
        []
    );

    const handleRemoveFromCart = useCallback(
        async (lineItemId) => {
            try {
                // Optimistically update the cart in the UI
                setCart((prevCart) => {
                    const updatedCart = { ...prevCart };
                    updatedCart.line_items = updatedCart.line_items.filter(
                        (item) => item.id !== lineItemId
                    );
                    updatedCart.total_items -= 1;
                    return updatedCart;
                });

                // Call the Commerce.js API to remove the item from the cart
                const response = await commerce.cart.remove(lineItemId);
                setCartCache(response.cart);
                setCart(response.cart);
            } catch (error) {
                console.error('Error removing item from cart:', error);
                // Revert the optimistic update if the API call fails
                setCart((prevCart) => {
                    const updatedCart = { ...prevCart };
                    const removedItem = prevCart.line_items.find((item) => item.id === lineItemId);
                    if (removedItem) {
                        updatedCart.line_items.push(removedItem);
                        updatedCart.total_items += 1;
                    }
                    return updatedCart;
                });
            }
        },
        []
    );

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (!cart) return <div>Loading cart...</div>;

    return (
        <Container>
            <Title>Your Cart <FaShoppingCart /></Title>
            {cart.line_items.length ? (
                <>
                    {cart.line_items.map((item) => (
                        <CartItem key={item.id}>
                            <ItemDetails>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>{item.line_total.formatted_with_symbol}</ItemPrice>
                            </ItemDetails>
                            <QuantityControl>
                                <QuantityButton onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
                                    <FaMinus />
                                </QuantityButton>
                                <Quantity>{item.quantity}</Quantity>
                                <QuantityButton onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
                                    <FaPlus />
                                </QuantityButton>
                            </QuantityControl>
                            <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                                <FaTrash />
                            </RemoveButton>
                        </CartItem>
                    ))}
                    <Total>Total: {cart.subtotal.formatted_with_symbol}</Total>
                    <CheckoutButton onClick={handleCheckout}>Proceed to Checkout</CheckoutButton>
                </>
            ) : (
                <EmptyCart>Your cart is empty</EmptyCart>
            )}
        </Container>
    );
};

export default Cart;