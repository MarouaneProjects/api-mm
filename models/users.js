const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    PhoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
});

module.exports = User;
