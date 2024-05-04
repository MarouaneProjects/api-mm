// models/farmManagement.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const FarmManagement = sequelize.define('FarmManagement', {
    FarmID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    FarmerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Activity: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    DateEntered: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
});

module.exports = FarmManagement;
