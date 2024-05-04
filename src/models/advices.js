// models/advices.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Advice = sequelize.define('Advice', {
    AdviceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Title: {
        type: DataTypes.STRING
    },
    Content: {
        type: DataTypes.STRING
    },
    Author: {
        type: DataTypes.STRING
    },
    DateEntered: {
        type: DataTypes.DATE
    }
});

module.exports = Advice;
