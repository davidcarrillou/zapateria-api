const express = require('express');
const router = express.Router();
const corteCajaController = require('../controllers/corteCajaController');

/**
 * @swagger
 * tags:
 *   name: CorteCaja
 *   description: API para gestionar cortes de caja
 */

/**
 * @swagger
 * /api/corteCaja:
 *   post:
 *     summary: Crea un nuevo corte de caja
 *     tags: [CorteCaja]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - horario
 *               - saldo
 *               - id_user
 *               - total_venta
 *               - id_producto
 *               - id_marca
 *               - id_modelo
 *               - id_categoria
 *             properties:
 *               horario:
 *                 type: string
 *                 format: date-time
 *               saldo:
 *                 type: number
 *               id_user:
 *                 type: integer
 *               total_venta:
 *                 type: number
 *               id_producto:
 *                 type: integer
 *               id_marca:
 *                 type: integer
 *               id_modelo:
 *                 type: integer
 *               id_categoria:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Corte de caja creado con éxito
 *       500:
 *         description: Error al crear el corte de caja
 */
router.post('/', corteCajaController.create);

/**
 * @swagger
 * /api/corteCaja:
 *   get:
 *     summary: Obtiene la lista de todos los cortes de caja
 *     tags: [CorteCaja]
 *     responses:
 *       200:
 *         description: Lista de cortes de caja
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_corte_caja:
 *                     type: integer
 *                   horario:
 *                     type: string
 *                     format: date-time
 *                   saldo:
 *                     type: number
 *                   id_user:
 *                     type: integer
 *                   total_venta:
 *                     type: number
 *                   id_producto:
 *                     type: integer
 *                   id_marca:
 *                     type: integer
 *                   id_modelo:
 *                     type: integer
 *                   id_categoria:
 *                     type: integer
 *       500:
 *         description: Error al obtener los cortes de caja
 */
router.get('/', corteCajaController.getAll);

/**
 * @swagger
 * /api/corteCaja/{id}:
 *   get:
 *     summary: Obtiene un corte de caja por ID
 *     tags: [CorteCaja]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del corte de caja
 *     responses:
 *       200:
 *         description: Detalles del corte de caja
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_corte_caja:
 *                   type: integer
 *                 horario:
 *                   type: string
 *                   format: date-time
 *                 saldo:
 *                   type: number
 *                 id_user:
 *                   type: integer
 *                 total_venta:
 *                   type: number
 *                 id_producto:
 *                   type: integer
 *                 id_marca:
 *                   type: integer
 *                 id_modelo:
 *                   type: integer
 *                 id_categoria:
 *                   type: integer
 *       404:
 *         description: Corte de caja no encontrado
 *       500:
 *         description: Error al obtener el corte de caja
 */
router.get('/:id', corteCajaController.getById);

/**
 * @swagger
 * /api/corteCaja/{id}:
 *   put:
 *     summary: Actualiza un corte de caja por ID
 *     tags: [CorteCaja]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del corte de caja
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               horario:
 *                 type: string
 *                 format: date-time
 *               saldo:
 *                 type: number
 *               id_user:
 *                 type: integer
 *               total_venta:
 *                 type: number
 *               id_producto:
 *                 type: integer
 *               id_marca:
 *                 type: integer
 *               id_modelo:
 *                 type: integer
 *               id_categoria:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Corte de caja actualizado con éxito
 *       404:
 *         description: Corte de caja no encontrado
 *       500:
 *         description: Error al actualizar el corte de caja
 */
router.put('/:id', corteCajaController.update);

/**
 * @swagger
 * /api/corteCaja/{id}:
 *   delete:
 *     summary: Elimina un corte de caja por ID
 *     tags: [CorteCaja]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del corte de caja
 *     responses:
 *       204:
 *         description: Corte de caja eliminado con éxito
 *       404:
 *         description: Corte de caja no encontrado
 *       500:
 *         description: Error al eliminar el corte de caja
 */
router.delete('/:id', corteCajaController.delete);

module.exports = router;
