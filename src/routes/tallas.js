const express = require('express');
const router = express.Router();
const tallasController = require('../controllers/tallaController');

router.post('/', tallasController.create);
router.get('/', tallasController.getAll);
router.get('/:id', tallasController.getById);
router.put('/:id', tallasController.update);
router.delete('/:id', tallasController.delete);

module.exports = router;