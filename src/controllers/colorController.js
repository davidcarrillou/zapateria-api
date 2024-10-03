// CRUD para Colores
const Color = require('../models/color.model');

exports.create = async (req, res) => {
    try {
      const color = await Color.create(req.body);
      res.status(201).json(color);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.getAll = async (req, res) => {
    try {
      const colores = await Color.findAll();
      res.status(200).json(colores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getById = async (req, res) => {
    try {
      const color = await Color.findByPk(req.params.id);
      if (color) {
        res.status(200).json(color);
      } else {
        res.status(404).json({ error: 'Color no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      const color = await Color.findByPk(req.params.id);
      if (color) {
        await color.update(req.body);
        res.status(200).json(color);
      } else {
        res.status(404).json({ error: 'Color no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      const color = await Color.findByPk(req.params.id);
      if (color) {
        await color.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Color no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };