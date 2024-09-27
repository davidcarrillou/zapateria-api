const Producto = require('../models/productos.model');

exports.create = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

exports.getById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

exports.update = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.update(req.body);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

exports.delete = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
