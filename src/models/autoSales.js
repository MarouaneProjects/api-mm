// models/autoSales.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const AutoSales = sequelize.define('AutoSales', {
    AuID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    DateEntered: {
        type: DataTypes.DATE
    },
    QuantityOfChick: {
        type: DataTypes.INTEGER
    },
    AgeOfChick: {
        type: DataTypes.INTEGER
    },
    FarmID: {
        type: DataTypes.INTEGER
    }
});

module.exports = AutoSales;
