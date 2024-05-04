require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//  Initial expess
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// DB Connection
require('./models');

const whitelist = [process.env.DOMAIN_URL]


// Initial CORS
app.use(
    cors({
        origin: whitelist,
        credentials: true,
    })
);

// authorise CROS
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Credentials', true);

    var origin = req.headers.origin;

    if (whitelist.indexOf(origin) != -1) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // X-Token-Auth
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

    next();
});

// Import required routes
const userRoutes = require('./routes/users');
const farmerRoutes = require('./routes/farmers');
const wholesalerRoutes = require('./routes/wholesalers');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const transactionRoutes = require('./routes/transactions');
const orderRoutes = require('./routes/orders');
const reviewRoutes = require('./routes/reviews');
const notificationRoutes = require('./routes/notifications');
const subscriptionRoutes = require('./routes/subscriptions');
const farmManagementRoutes = require('./routes/farmManagement');
const variablePriceRoutes = require('./routes/variablePrices');
const autoSalesRoutes = require('./routes/autoSales');
const messageRoutes = require('./routes/messages');
const adviceRoutes = require('./routes/advices');
const eventRoutes = require('./routes/events');
const promotionRoutes = require('./routes/promotions');
const farmRoutes = require('./routes/farms'); // Import farmRoutes


// health api
app.get('/api/health', (req, res) =>
    res.status(200).json({ env: process.env.DOMAIN_URL })
);

// Use the routes
app.use('/users', userRoutes);
app.use('/farmers', farmerRoutes);
app.use('/wholesalers', wholesalerRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/transactions', transactionRoutes);
app.use('/orders', orderRoutes);
app.use('/reviews', reviewRoutes);
app.use('/notifications', notificationRoutes);
app.use('/subscriptions', subscriptionRoutes);
app.use('/farm-management', farmManagementRoutes);
app.use('/variable-prices', variablePriceRoutes);
app.use('/auto-sales', autoSalesRoutes);
app.use('/messages', messageRoutes);
app.use('/advices', adviceRoutes);
app.use('/events', eventRoutes);
app.use('/promotions', promotionRoutes);
app.use('/farms', farmRoutes); // Use farmRoutes


//Handles 404 errors
app.use((req, res, next) => {
    const error = new Error('Error Occured!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

// Start Server
const port = process.env.PORT || 8000;
app.listen(port);
console.log(`server listening on ${port}`);