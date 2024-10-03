const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const Venta = sequelize.define('Venta', {
  id_ventas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pago_con: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodo_pago: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  cambio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'ventas',
  timestamps: false
});

module.exports = Venta;
