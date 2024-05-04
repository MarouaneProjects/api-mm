// models/subscriptions.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Subscription = sequelize.define('Subscription', {
    SubscriptionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Plan: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    StartDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    EndDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Subscription;
