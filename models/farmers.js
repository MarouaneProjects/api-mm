// models/farmers.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Farmer = sequelize.define('Farmer', {
    FarmerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    FarmName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Location: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    SubscriptionStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Farmer;
