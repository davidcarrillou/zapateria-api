const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const HistorialVenta = sequelize.define('HistorialVenta', {
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  }, {
    tableName: 'historial_ventas',
    timestamps: false // Desactiva los timestamps automáticos
  });
  
  module.exports = HistorialVenta;