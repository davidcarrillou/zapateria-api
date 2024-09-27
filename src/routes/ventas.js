const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: API para gestionar ventas
 */

/**
 * @swagger
 * /api/ventas:
 *   post:
 *     summary: Crea una nueva venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_producto
 *               - id_modelo
 *               - cantidad
 *               - precio
 *               - pago_con
 *               - cambio
 *             properties:
 *               id_producto:
 *                 type: integer
 *               id_modelo:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               precio:
 *                 type: integer
 *               pago_con:
 *                 type: integer
 *               cambio:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venta creada con éxito
 *       500:
 *         description: Error al crear la venta
 */
router.post('/', ventaController.create);

/**
 * @swagger
 * /api/ventas:
 *   get:
 *     summary: Obtiene la lista de todas las ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_ventas:
 *                     type: integer
 *                   id_producto:
 *                     type: integer
 *                   id_modelo:
 *                     type: integer
 *                   cantidad:
 *                     type: integer
 *                   precio:
 *                     type: integer
 *                   pago_con:
 *                     type: integer
 *                   cambio:
 *                     type: integer
 *       500:
 *         description: Error al obtener las ventas
 */
router.get('/', ventaController.getAll);

/**
 * @swagger
 * /api/ventas/{id}:
 *   get:
 *     summary: Obtiene una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Detalles de la venta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_ventas:
 *                   type: integer
 *                 id_producto:
 *                   type: integer
 *                 id_modelo:
 *                   type: integer
 *                 cantidad:
 *                   type: integer
 *                 precio:
 *                   type: integer
 *                 pago_con:
 *                   type: integer
 *                 cambio:
 *                   type: integer
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error al obtener la venta
 */
router.get('/:id', ventaController.getById);

/**
 * @swagger
 * /api/ventas/{id}:
 *   put:
 *     summary: Actualiza una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_producto:
 *                 type: integer
 *               id_modelo:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               precio:
 *                 type: integer
 *               pago_con:
 *                 type: integer
 *               cambio:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venta actualizada con éxito
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error al actualizar la venta
 */
router.put('/:id', ventaController.update);

/**
 * @swagger
 * /api/ventas/{id}:
 *   delete:
 *     summary: Elimina una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       204:
 *         description: Venta eliminada con éxito
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error al eliminar la venta
 */
router.delete('/:id', ventaController.delete);

module.exports = router;