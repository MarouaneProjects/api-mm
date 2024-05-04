// models/wholesalers.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Wholesaler = sequelize.define('Wholesaler', {
    WholesalerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    CompanyName: {
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

module.exports = Wholesaler;
