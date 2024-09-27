const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: API para gestionar proveedores
 */

/**
 * @swagger
 * /api/proveedores:
 *   post:
 *     summary: Crea un nuevo proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - codigo
 *             properties:
 *               nombre:
 *                 type: string
 *               codigo:
 *                 type: string
 *               direccion:
 *                 type: string
 *               giro:
 *                 type: string
 *               telefono:
 *                 type: string
 *               id_producto:
 *                 type: string
 *               gmail:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proveedor creado con éxito
 *       500:
 *         description: Error al crear el proveedor
 */
router.post('/', proveedorController.create);

/**
 * @swagger
 * /api/proveedores:
 *   get:
 *     summary: Obtiene la lista de todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_proveedores:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   codigo:
 *                     type: string
 *                   direccion:
 *                     type: string
 *                   giro:
 *                     type: string
 *                   telefono:
 *                     type: string
 *                   id_producto:
 *                     type: string
 *                   gmail:
 *                     type: string
 *       500:
 *         description: Error al obtener los proveedores
 */
router.get('/', proveedorController.getAll);

/**
 * @swagger
 * /api/proveedores/{id}:
 *   get:
 *     summary: Obtiene un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Detalles del proveedor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_proveedores:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 codigo:
 *                   type: string
 *                 direccion:
 *                   type: string
 *                 giro:
 *                   type: string
 *                 telefono:
 *                   type: string
 *                 id_producto:
 *                   type: string
 *                 gmail:
 *                   type: string
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error al obtener el proveedor
 */
router.get('/:id', proveedorController.getById);

/**
 * @swagger
 * /api/proveedores/{id}:
 *   put:
 *     summary: Actualiza un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               codigo:
 *                 type: string
 *               direccion:
 *                 type: string
 *               giro:
 *                 type: string
 *               telefono:
 *                 type: string
 *               id_producto:
 *                 type: string
 *               gmail:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proveedor actualizado con éxito
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error al actualizar el proveedor
 */
router.put('/:id', proveedorController.update);

/**
 * @swagger
 * /api/proveedores/{id}:
 *   delete:
 *     summary: Elimina un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     responses:
 *       204:
 *         description: Proveedor eliminado con éxito
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error al eliminar el proveedor
 */
router.delete('/:id', proveedorController.delete);

module.exports = router;