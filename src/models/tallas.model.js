// models/talla.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Talla = sequelize.define('Talla', {
  id_talla: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  talla_mx: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: false,
  },
  talla_us: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true,
  },
  talla_eur: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
    tableName: 'tallas',
    timestamps: false
  });

module.exports = Talla;
