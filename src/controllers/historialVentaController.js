// controllers/historialVentaController.js
const HistorialVenta = require('../models/historialVentas.model');

// Crear una nueva venta
exports.crearVenta = async (req, res) => {
  try {
    const historial = await HistorialVenta.create(req.body);
    res.status(201).json(historial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
    try {
      const historial = await HistorialVenta.findAll();
      res.status(200).json(historial);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getById = async (req, res) => {
    try {
      const historial = await HistorialVenta.findByPk(req.params.id);
      if (color) {
        res.status(200).json(historial);
      } else {
        res.status(404).json({ error: 'no se encontro historial' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };