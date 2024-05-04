// models/orders.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Order = sequelize.define('Order', {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    TransactionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    FarmerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    WholesalerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ProductID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    DateEntered: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Order;
