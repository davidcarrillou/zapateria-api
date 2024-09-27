const Modelo = require('../models/modelos.model');

// Crear un nuevo modelo
exports.create = async (req, res) => {
  try {
    const modelo = await Modelo.create(req.body);
    res.status(201).json(modelo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el modelo' });
  }
};

// Obtener todos los modelos
exports.getAll = async (req, res) => {
  try {
    const modelos = await Modelo.findAll();
    res.status(200).json(modelos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los modelos' });
  }
};

// Obtener un modelo por ID
exports.getById = async (req, res) => {
  try {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).json({ error: 'Modelo no encontrado' });
    res.status(200).json(modelo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el modelo' });
  }
};

// Actualizar un modelo por ID
exports.update = async (req, res) => {
  try {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).json({ error: 'Modelo no encontrado' });

    await modelo.update(req.body);
    res.status(200).json(modelo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el modelo' });
  }
};

// Eliminar un modelo por ID
exports.delete = async (req, res) => {
  try {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).json({ error: 'Modelo no encontrado' });

    await modelo.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el modelo' });
  }
};
