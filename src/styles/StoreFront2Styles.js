import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

export const ProductCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
    ${ProductCard}:hover & {
        transform: scale(1.05);
    }
`;

export const ProductInfo = styled.div`
    padding: 1rem;
    background-color: #f8f9fa;
`;

export const ProductName = styled.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: #333;
`;

export const ProductPrice = styled.p`
    margin: 0 0 1rem 0;
    font-weight: bold;
    color: #28a745;
    font-size: 1.1rem;
`;

export const CTAButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    font-size: 1rem;
    &:hover {
        background-color: #0056b3;
    }
    &:active {
        transform: translateY(1px);
    }
`;

export const LoadingSpinner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const ErrorMessage = styled.div`
    color: #dc3545;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
    }
`;

export const CartToggle = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    z-index: 1000;
`;

export const CartDropdown = styled.div`
    position: fixed;
    top: 60px;
    right: 20px;
    width: 300px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
`;

export const CartTotal = styled.div`
    font-weight: bold;
    margin-top: 1rem;
    text-align: right;
`;

export const CheckoutButton = styled(CTAButton)`
    margin-top: 1rem;
`;

export const RemoveFromCartButton = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    margin-left: auto;
`;

export const EmptyCartMessage = styled.p`
    text-align: center;
    color: #6c757d;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1100;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const CheckoutForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FormInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
`;

export const SubmitButton = styled(CTAButton)`
    margin-top: 1rem;
`;