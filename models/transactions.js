// models/transactions.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
    TransactionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    DateEntered: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Type: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
});

module.exports = Transaction;
