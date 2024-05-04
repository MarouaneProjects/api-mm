// models/promotions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Promotion = sequelize.define('Promotion', {
    PromotionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Type: {
        type: DataTypes.STRING
    },
    Discount: {
        type: DataTypes.DECIMAL(5, 2)
    },
    StartDate: {
        type: DataTypes.DATE
    },
    EndDate: {
        type: DataTypes.DATE
    }
});

module.exports = Promotion;
