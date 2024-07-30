import axios from 'axios';

const printfulClient = axios.create({
    baseURL: 'http://localhost:5000/api/printful',
});

export const getProducts = async () => {
    try {
        const response = await printfulClient.get('/products');
        return response.data.result;
    } catch (error) {
        console.error('Error fetching Printful products:', error);
        throw error;
    }
};

export default printfulClient;