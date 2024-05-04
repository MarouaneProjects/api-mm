// models/reviews.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Review = sequelize.define('Review', {
    ReviewID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Comment: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    DateEntered: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Review;
