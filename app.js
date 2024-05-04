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
require('./src/models');

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
const userRoutes = require('./src/routes/users');
// const farmerRoutes = require('./src/routes/farmers');
// const wholesalerRoutes = require('./src/routes/wholesalers');
// const productRoutes = require('./src/routes/products');
// const categoryRoutes = require('./src/routes/categories');
// const transactionRoutes = require('./src/routes/transactions');
// const orderRoutes = require('./src/routes/orders');
// const reviewRoutes = require('./src/routes/reviews');
// const notificationRoutes = require('./src/routes/notifications');
// const subscriptionRoutes = require('./src/routes/subscriptions');
// const farmManagementRoutes = require('./src/routes/farmManagement');
// const variablePriceRoutes = require('./src/routes/variablePrices');
// const autoSalesRoutes = require('./src/routes/autoSales');
// const messageRoutes = require('./src/routes/messages');
// const adviceRoutes = require('./src/routes/advices');
// const eventRoutes = require('./src/routes/events');
// const promotionRoutes = require('./src/routes/promotions');
// const farmRoutes = require('./src/routes/farms'); // Import farmRoutes


// health api
app.get('/api/health', (req, res) =>
    res.status(200).json({ env: process.env.DOMAIN_URL })
);

// Use the routes
app.use('/users', userRoutes);
// app.use('/farmers', farmerRoutes);
// app.use('/wholesalers', wholesalerRoutes);
// app.use('/products', productRoutes);
// app.use('/categories', categoryRoutes);
// app.use('/transactions', transactionRoutes);
// app.use('/orders', orderRoutes);
// app.use('/reviews', reviewRoutes);
// app.use('/notifications', notificationRoutes);
// app.use('/subscriptions', subscriptionRoutes);
// app.use('/farm-management', farmManagementRoutes);
// app.use('/variable-prices', variablePriceRoutes);
// app.use('/auto-sales', autoSalesRoutes);
// app.use('/messages', messageRoutes);
// app.use('/advices', adviceRoutes);
// app.use('/events', eventRoutes);
// app.use('/promotions', promotionRoutes);
// app.use('/farms', farmRoutes); // Use farmRoutes


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