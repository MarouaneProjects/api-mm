// models/products.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    CategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Product;
