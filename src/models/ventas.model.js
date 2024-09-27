const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const Venta = sequelize.define('Venta', {
  id_ventas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_modelo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pago_con: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cambio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  tableName: 'ventas',
  timestamps: false
});

module.exports = Venta;
