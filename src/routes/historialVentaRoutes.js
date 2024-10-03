// routes/historialVentaRoutes.js
const express = require('express');
const router = express.Router();
const historialVentaController = require('../controllers/historialVentaController');

// Ruta para crear una nueva venta
router.post('/', historialVentaController.crearVenta);
router.get('/', historialVentaController.getAll)
router.get('/:id', historialVentaController.getById)

module.exports = router;