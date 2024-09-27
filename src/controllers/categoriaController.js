const Categoria = require('../models/categoria.model');

// Crear una nueva categoría
exports.create = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error });
    }
};

// Obtener todas las categorías
exports.getAll = async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las categorias' });
    }
  };

// Obtener una categoría por ID
exports.getById = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
};

// Actualizar una categoría por ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Categoria.update(req.body, {
            where: { id_categoria: req.params.id }
        });
        if (!updated) return res.status(404).json({ message: 'Categoría no encontrada' });
        const updatedCategoria = await Categoria.findByPk(req.params.id);
        res.status(200).json(updatedCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
};

// Eliminar una categoría por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Categoria.destroy({
            where: { id_categoria: req.params.id }
        });
        if (!deleted) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
};
