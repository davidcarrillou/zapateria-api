const Marca = require('../models/marcas.model'); // Asegúrate de importar el modelo correcto

// Crear una nueva marca
exports.create = async (req, res) => {
    try {
        const marca = await Marca.create(req.body);
        res.status(201).json(marca);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la marca', error });
    }
};

// Obtener todas las marcas
exports.getAll = async (req, res) => {
    try {
        const marcas = await Marca.findAll();
        res.status(200).json(marcas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las marcas', error });
    }
};

// Obtener una marca por ID
exports.getById = async (req, res) => {
    try {
        const marca = await Marca.findByPk(req.params.id);
        if (!marca) return res.status(404).json({ message: 'Marca no encontrada' });
        res.status(200).json(marca);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la marca', error });
    }
};

// Actualizar una marca por ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Marca.update(req.body, {
            where: { id_marca: req.params.id }
        });
        if (!updated) return res.status(404).json({ message: 'Marca no encontrada' });
        const updatedMarca = await Marca.findByPk(req.params.id);
        res.status(200).json(updatedMarca);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la marca', error });
    }
};

// Eliminar una marca por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Marca.destroy({
            where: { id_marca: req.params.id }
        });
        if (!deleted) return res.status(404).json({ message: 'Marca no encontrada' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la marca', error });
    }
};
