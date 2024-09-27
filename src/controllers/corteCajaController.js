const CorteCaja = require('../models/corteCaja.model');

// Crear un nuevo corte de caja
exports.create = async (req, res) => {
    try {
        const corteCaja = await CorteCaja.create(req.body);
        res.status(201).json(corteCaja);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el corte de caja', error });
    }
};

// Obtener todos los cortes de caja
exports.getAll = async (req, res) => {
    try {
        const cortesCaja = await CorteCaja.findAll();
        res.status(200).json(cortesCaja);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los cortes de caja', error });
    }
};

// Obtener un corte de caja por ID
exports.getById = async (req, res) => {
    try {
        const corteCaja = await CorteCaja.findByPk(req.params.id);
        if (!corteCaja) return res.status(404).json({ message: 'Corte de caja no encontrado' });
        res.status(200).json(corteCaja);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el corte de caja', error });
    }
};

// Actualizar un corte de caja por ID
exports.update = async (req, res) => {
    try {
        const [updated] = await CorteCaja.update(req.body, {
            where: { id_corte_caja: req.params.id }
        });
        if (!updated) return res.status(404).json({ message: 'Corte de caja no encontrado' });
        const updatedCorte = await CorteCaja.findByPk(req.params.id);
        res.status(200).json(updatedCorte);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el corte de caja', error });
    }
};

// Eliminar un corte de caja por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await CorteCaja.destroy({
            where: { id_corte_caja: req.params.id }
        });
        if (!deleted) return res.status(404).json({ message: 'Corte de caja no encontrado' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el corte de caja', error });
    }
};
