const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedores: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  direccion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  giro: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_producto: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  gmail: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  tableName: 'proveedores',
  timestamps: false
});

module.exports = Proveedor;
