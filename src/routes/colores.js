const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');
/**
 * @swagger
 * tags:
 *   name: Colores
 *   description: Operaciones relacionadas con los colores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Color:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id_color:
 *           type: integer
 *           description: ID único del color
 *           example: 1
 *         nombre:
 *           type: string
 *           description: Nombre del color
 *           example: Rojo
 *         descripcion:
 *           type: string
 *           description: Descripción del color
 *           example: Un color vibrante y energético
 *         fecha_registro:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del color
 *           example: '2024-04-25T10:00:00.000Z'
 *   fecha_registro: "2024-09-30T21:46:47.000Z"
 */

/**
 * @swagger
 * /colores:
 *   post:
 *     summary: Crear un nuevo color
 *     tags: [Colores]
 *     security:
 *       - bearerAuth: []
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
 *                 description: Nombre del color
 *                 example: Azul
 *               descripcion:
 *                 type: string
 *                 description: Descripción del color
 *                 example: Un color calmante y sereno
 *     responses:
 *       201:
 *         description: Color creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       400:
 *         description: Solicitud inválida
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Acceso denegado
 *       500:
 *         description: Error del servidor
 */
router.post('/', colorController.create);

/**
 * @swagger
 * /colores:
 *   get:
 *     summary: Obtener todos los colores
 *     tags: [Colores]
 *     responses:
 *       200:
 *         description: Lista de todos los colores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Color'
 *       500:
 *         description: Error del servidor
 */
router.get('/', colorController.getAll);
/**
 * @swagger
 * /colores/{id}:
 *   get:
 *     summary: Obtener un color por ID
 *     tags: [Colores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del color a obtener
 *     responses:
 *       200:
 *         description: Información del color solicitado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       404:
 *         description: Color no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', colorController.getById);
/**
 * @swagger
 * /colores/{id}:
 *   put:
 *     summary: Actualizar un color existente
 *     tags: [Colores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del color a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del color
 *                 example: Verde
 *               descripcion:
 *                 type: string
 *                 description: Descripción del color
 *                 example: Un color fresco y natural
 *     responses:
 *       200:
 *         description: Color actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       400:
 *         description: Solicitud inválida
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Acceso denegado
 *       404:
 *         description: Color no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', colorController.update);
/**
 * @swagger
 * /colores/{id}:
 *   delete:
 *     summary: Eliminar un color por ID
 *     tags: [Colores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del color a eliminar
 *     responses:
 *       204:
 *         description: Color eliminado exitosamente
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Acceso denegado
 *       404:
 *         description: Color no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', colorController.delete);

module.exports = router;