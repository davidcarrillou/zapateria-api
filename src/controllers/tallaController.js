// CRUD para Tallas

const Talla = require('../models/tallas.model');

exports.create = async (req, res) => {
    try {
      const talla = await Talla.create(req.body);
      res.status(201).json(talla);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.getAll = async (req, res) => {
    try {
      const tallas = await Talla.findAll();
      res.status(200).json(tallas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getById = async (req, res) => {
    try {
      const talla = await Talla.findByPk(req.params.id);
      if (talla) {
        res.status(200).json(talla);
      } else {
        res.status(404).json({ error: 'Talla no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      const talla = await Talla.findByPk(req.params.id);
      if (talla) {
        await talla.update(req.body);
        res.status(200).json(talla);
      } else {
        res.status(404).json({ error: 'Talla no encontrada' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      const talla = await Talla.findByPk(req.params.id);
      if (talla) {
        await talla.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Talla no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  