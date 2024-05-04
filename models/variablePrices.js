// models/variablePrices.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VariablePrice = sequelize.define('VariablePrice', {
    PriceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Region: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
});

module.exports = VariablePrice;
