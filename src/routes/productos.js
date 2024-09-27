const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para gestionar productos
 */

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
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
 *               id_categoria:
 *                 type: integer
 *               id_marca:
 *                 type: integer
 *               id_modelo:
 *                 type: integer
 *               id_color:
 *                 type: integer
 *               id_talla:
 *                 type: integer
 *               precio_venta:
 *                 type: string
 *               precio_compra:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto creado con éxito
 *       500:
 *         description: Error al crear el producto
 */
router.post('/', productoController.create);

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtiene la lista de todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_producto:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   id_categoria:
 *                     type: integer
 *                   id_marca:
 *                     type: integer
 *                   id_modelo:
 *                     type: integer
 *                   id_color:
 *                     type: integer
 *                   id_talla:
 *                     type: integer
 *                   precio_venta:
 *                     type: string
 *                   precio_compra:
 *                     type: number
 *                   stock:
 *                     type: integer
 *       500:
 *         description: Error al obtener los productos
 */
router.get('/', productoController.getAll);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Detalles del producto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_producto:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 id_categoria:
 *                   type: integer
 *                 id_marca:
 *                   type: integer
 *                 id_modelo:
 *                   type: integer
 *                 id_color:
 *                   type: integer
 *                 id_talla:
 *                   type: integer
 *                 precio_venta:
 *                   type: string
 *                 precio_compra:
 *                   type: number
 *                 stock:
 *                   type: integer
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al obtener el producto
 */
router.get('/:id', productoController.getById);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               id_categoria:
 *                 type: integer
 *               id_marca:
 *                 type: integer
 *               id_modelo:
 *                 type: integer
 *               id_color:
 *                 type: integer
 *               id_talla:
 *                 type: integer
 *               precio_venta:
 *                 type: string
 *               precio_compra:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al actualizar el producto
 */
router.put('/:id', productoController.update);

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       204:
 *         description: Producto eliminado con éxito
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al eliminar el producto
 */
router.delete('/:id', productoController.delete);

module.exports = router;
