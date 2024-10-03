// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../models/db');

// Importar todos los modelos
const Categoria = require('./categoria.model');
const Color = require('./color.model');
const Marca = require('./marcas.model');
const Modelo = require('./modelos.model');
const Producto = require('./productos.model');
const Proveedor = require('./proveedores.model');
const Talla = require('./tallas.model');
const Usuario = require('./usuarios.model');
const Venta = require('./ventas.model');
const CorteCaja = require('./corteCaja.model');

// Definir las asociaciones

// Categoria pertenece a Marca y Modelo
Categoria.belongsTo(Marca, { foreignKey: 'id_marca', as: 'Marca' });
Categoria.belongsTo(Modelo, { foreignKey: 'id_modelo', as: 'Modelo' });
Marca.hasMany(Categoria, { foreignKey: 'id_marca', as: 'Categorias' });
Modelo.hasMany(Categoria, { foreignKey: 'id_modelo', as: 'Categorias' });

// Producto pertenece a Categoria, Marca, Modelo, Color, Talla
Producto.belongsTo(Categoria, { foreignKey: 'id_categoria', as: 'Categoria' });
Producto.belongsTo(Marca, { foreignKey: 'id_marca', as: 'Marca' });
Producto.belongsTo(Modelo, { foreignKey: 'id_modelo', as: 'Modelo' });
Producto.belongsTo(Color, { foreignKey: 'id_color', as: 'Color' });
Producto.belongsTo(Talla, { foreignKey: 'id_talla', as: 'Talla' });
Categoria.hasMany(Producto, { foreignKey: 'id_categoria', as: 'Productos' });
Marca.hasMany(Producto, { foreignKey: 'id_marca', as: 'Productos' });
Modelo.hasMany(Producto, { foreignKey: 'id_modelo', as: 'Productos' });
Color.hasMany(Producto, { foreignKey: 'id_color', as: 'Productos' });
Talla.hasMany(Producto, { foreignKey: 'id_talla', as: 'Productos' });

// Proveedor pertenece a Producto
Proveedor.belongsTo(Producto, { foreignKey: 'id_producto', as: 'Producto' });
Producto.hasMany(Proveedor, { foreignKey: 'id_producto', as: 'Proveedores' });

// Venta pertenece a Producto y Usuario
Venta.belongsTo(Producto, { foreignKey: 'id_producto', as: 'Producto' });
Venta.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'Usuario' });
Producto.hasMany(Venta, { foreignKey: 'id_producto', as: 'Ventas' });
Usuario.hasMany(Venta, { foreignKey: 'id_usuario', as: 'Ventas' });

// CorteCaja pertenece a Usuario, Producto, Marca, Modelo, Categoria
CorteCaja.belongsTo(Usuario, { foreignKey: 'id_user', as: 'Usuario' });
CorteCaja.belongsTo(Producto, { foreignKey: 'id_producto', as: 'Producto' });
CorteCaja.belongsTo(Marca, { foreignKey: 'id_marca', as: 'Marca' });
CorteCaja.belongsTo(Modelo, { foreignKey: 'id_modelo', as: 'Modelo' });
CorteCaja.belongsTo(Categoria, { foreignKey: 'id_categoria', as: 'Categoria' });
Usuario.hasMany(CorteCaja, { foreignKey: 'id_user', as: 'CortesCaja' });
Producto.hasMany(CorteCaja, { foreignKey: 'id_producto', as: 'CortesCaja' });
Marca.hasMany(CorteCaja, { foreignKey: 'id_marca', as: 'CortesCaja' });
Modelo.hasMany(CorteCaja, { foreignKey: 'id_modelo', as: 'CortesCaja' });
Categoria.hasMany(CorteCaja, { foreignKey: 'id_categoria', as: 'CortesCaja' });

// Exportar todos los modelos y la conexión
module.exports = {
  sequelize,
  Categoria,
  Color,
  Marca,
  Modelo,
  Producto,
  Proveedor,
  Talla,
  Usuario,
  Venta,
  CorteCaja
};