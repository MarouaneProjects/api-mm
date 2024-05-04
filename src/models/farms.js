// models/farms.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Farm = sequelize.define('Farm', {
    FarmID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FarmerID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    FarmName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SubscriptionStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Farm;
