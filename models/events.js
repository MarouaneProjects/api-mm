// models/events.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
    EventID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Title: {
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.STRING
    },
    DateEntered: {
        type: DataTypes.DATE
    },
    Location: {
        type: DataTypes.STRING
    }
});

module.exports = Event;
