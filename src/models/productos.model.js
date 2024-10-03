const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_marca: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_modelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_color: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_talla: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_venta: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  precio_compra: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},{
  tableName: 'productos',
  timestamps: false
});

module.exports = Producto;
