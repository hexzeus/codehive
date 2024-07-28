import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import commerce from '../lib/commerce';
import {
  Container,
  Title,
  CartItem,
  ItemDetails,
  ItemName,
  ItemPrice,
  QuantityControl,
  QuantityButton,
  Quantity,
  RemoveButton,
  Total,
  EmptyCart,
  ActionButton,
  ButtonContainer
} from '../styles/CartStyles';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCart = useCallback(async () => {
    try {
      setIsLoading(true);
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleUpdateCartQty = useCallback(async (lineItemId, quantity) => {
    try {
      const response = await commerce.cart.update(lineItemId, { quantity });
      setCart(response.cart);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  }, []);

  const handleRemoveFromCart = useCallback(async (lineItemId) => {
    try {
      const response = await commerce.cart.remove(lineItemId);
      setCart(response.cart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  }, []);

  const handleEmptyCart = useCallback(async () => {
    try {
      const response = await commerce.cart.empty();
      setCart(response.cart);
    } catch (error) {
      console.error('Error emptying cart:', error);
    }
  }, []);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const cartItems = useMemo(() => {
    return cart?.line_items.map((item) => (
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
    ));
  }, [cart, handleUpdateCartQty, handleRemoveFromCart]);

  if (isLoading) return <Container><Title>Loading cart...</Title></Container>;

  return (
    <Container>
      <Title>Your Cart <FaShoppingCart /></Title>
      {cart && cart.line_items.length ? (
        <>
          {cartItems}
          <Total>Total: {cart.subtotal.formatted_with_symbol}</Total>
          <ButtonContainer>
            <ActionButton onClick={handleCheckout}>Proceed to Checkout</ActionButton>
            <ActionButton onClick={handleEmptyCart}>Empty Cart</ActionButton>
          </ButtonContainer>
        </>
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </Container>
  );
};

export default Cart;