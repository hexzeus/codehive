import Commerce from '@chec/commerce.js';
import config from '../commerce.config.js';

// Create a Commerce instance
const commerce = new Commerce(config.commercePublicKey, true);

export default commerce;