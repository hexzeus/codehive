import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Adjust Helmet CSP
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
                fontSrc: ["'self'", "https://fonts.gstatic.com"],
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'", "https:", "http://localhost:5000"],
            },
        },
    })
);

const printfulApiKey = process.env.PRINTFUL_API_KEY;

app.get('/api/printful/products', async (req, res) => {
    try {
        const response = await axios.get('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${printfulApiKey}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Printful products:', error);
        res.status(500).json({ message: 'Error fetching Printful products' });
    }
});

app.post('/api/create-printful-order', async (req, res) => {
    try {
        const { items, recipient } = req.body;

        const orderItems = items.map(item => ({
            sync_variant_id: item.id,
            quantity: item.quantity
        }));

        const orderData = {
            recipient: {
                name: recipient.name,
                address1: recipient.address,
                city: recipient.city,
                state_code: recipient.state,
                country_code: recipient.country,
                zip: recipient.zip
            },
            items: orderItems
        };

        const response = await axios.post('https://api.printful.com/orders', orderData, {
            headers: {
                'Authorization': `Bearer ${printfulApiKey}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error creating Printful order:', error);
        res.status(500).json({ message: 'Error creating Printful order' });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;