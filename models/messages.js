// models/messages.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Message = sequelize.define('Message', {
    MessageID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SenderID: {
        type: DataTypes.INTEGER
    },
    ReceiverID: {
        type: DataTypes.INTEGER
    },
    Content: {
        type: DataTypes.STRING
    },
    Timestamp: {
        type: DataTypes.DATE
    }
});

module.exports = Message;
