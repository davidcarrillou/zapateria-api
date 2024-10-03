const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedores: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  giro: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gmail: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'proveedores',
  timestamps: false
});

module.exports = Proveedor;
