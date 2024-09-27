const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');

/**
 * @swagger
 * tags:
 *   name: Marcas
 *   description: API para gestionar marcas
 */

/**
 * @swagger
 * /api/marcas:
 *   post:
 *     summary: Crea una nueva marca
 *     tags: [Marcas]
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
 *         description: Marca creada con éxito
 *       500:
 *         description: Error al crear la marca
 */
router.post('/', marcaController.create);

/**
 * @swagger
 * /api/marcas:
 *   get:
 *     summary: Obtiene la lista de todas las marcas
 *     tags: [Marcas]
 *     responses:
 *       200:
 *         description: Lista de marcas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_marca:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *       500:
 *         description: Error al obtener las marcas
 */
router.get('/', marcaController.getAll);

/**
 * @swagger
 * /api/marcas/{id}:
 *   get:
 *     summary: Obtiene una marca por ID
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la marca
 *     responses:
 *       200:
 *         description: Detalles de la marca
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_marca:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *       404:
 *         description: Marca no encontrada
 *       500:
 *         description: Error al obtener la marca
 */
router.get('/:id', marcaController.getById);

/**
 * @swagger
 * /api/marcas/{id}:
 *   put:
 *     summary: Actualiza una marca por ID
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la marca
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
 *         description: Marca actualizada con éxito
 *       404:
 *         description: Marca no encontrada
 *       500:
 *         description: Error al actualizar la marca
 */
router.put('/:id', marcaController.update);

/**
 * @swagger
 * /api/marcas/{id}:
 *   delete:
 *     summary: Elimina una marca por ID
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la marca
 *     responses:
 *       204:
 *         description: Marca eliminada con éxito
 *       404:
 *         description: Marca no encontrada
 *       500:
 *         description: Error al eliminar la marca
 */
router.delete('/:id', marcaController.delete);

module.exports = router;
