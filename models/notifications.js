// models/notifications.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notification = sequelize.define('Notification', {
    NotificationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Message: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Notification;
