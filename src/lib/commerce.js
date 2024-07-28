import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;

// Log the API key (remove in production)
console.log('API Key:', checAPIKey);

if (!checAPIKey) {
    throw new Error('Missing Chec public API key');
}

const commerce = new Commerce(checAPIKey, true);

export default commerce;