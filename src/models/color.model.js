// models/color.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Color = sequelize.define('Color', {
    id_color: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    codigo_hex: {
        type: DataTypes.STRING(7),
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'colores',
    timestamps: false
});

module.exports = Color;
