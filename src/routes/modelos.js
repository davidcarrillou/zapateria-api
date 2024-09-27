const express = require('express');
const router = express.Router();
const modeloController = require('../controllers/modeloController');

/**
 * @swagger
 * tags:
 *   name: Modelos
 *   description: API para gestionar modelos
 */

/**
 * @swagger
 * /api/modelos:
 *   post:
 *     summary: Crea un nuevo modelo
 *     tags: [Modelos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Modelo creado con éxito
 *       500:
 *         description: Error al crear el modelo
 */
router.post('/', modeloController.create);

/**
 * @swagger
 * /api/modelos:
 *   get:
 *     summary: Obtiene la lista de todos los modelos
 *     tags: [Modelos]
 *     responses:
 *       200:
 *         description: Lista de modelos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_modelos:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *       500:
 *         description: Error al obtener los modelos
 */
router.get('/', modeloController.getAll);

/**
 * @swagger
 * /api/modelos/{id}:
 *   get:
 *     summary: Obtiene un modelo por ID
 *     tags: [Modelos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del modelo
 *     responses:
 *       200:
 *         description: Detalles del modelo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_modelos:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *       404:
 *         description: Modelo no encontrado
 *       500:
 *         description: Error al obtener el modelo
 */
router.get('/:id', modeloController.getById);

/**
 * @swagger
 * /api/modelos/{id}:
 *   put:
 *     summary: Actualiza un modelo por ID
 *     tags: [Modelos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del modelo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Modelo actualizado con éxito
 *       404:
 *         description: Modelo no encontrado
 *       500:
 *         description: Error al actualizar el modelo
 */
router.put('/:id', modeloController.update);

/**
 * @swagger
 * /api/modelos/{id}:
 *   delete:
 *     summary: Elimina un modelo por ID
 *     tags: [Modelos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del modelo
 *     responses:
 *       204:
 *         description: Modelo eliminado con éxito
 *       404:
 *         description: Modelo no encontrado
 *       500:
 *         description: Error al eliminar el modelo
 */
router.delete('/:id', modeloController.delete);

module.exports = router;
