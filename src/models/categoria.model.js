const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');
const Marca = require('../models/marcas.model');
const Modelo = require('../models/modelos.model');

const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
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
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'categorias',
  timestamps: false
});
// Configuración de las relaciones
Categoria.belongsTo(Marca, {
  foreignKey: 'id_marca',
  as: 'marca'
});

Categoria.belongsTo(Modelo, {
  foreignKey: 'id_modelo',
  as: 'modelo'
});
module.exports = Categoria;
