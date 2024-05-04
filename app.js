require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const express = require('express');
const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Check MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
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

// Body parsing middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
});

module.exports = sequelize;

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
