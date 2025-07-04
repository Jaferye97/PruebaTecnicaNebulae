const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');
const asyncWrapper = require('../middlewares/asyncWrapper');

router.get('/obtenerTodosPaginacion', asyncWrapper(controller.obtenerTodosPaginacion));
router.post('/', asyncWrapper(controller.crear));
router.put('/:id', asyncWrapper(controller.editar));
router.patch('/:id/CambiarEstado', asyncWrapper(controller.cambiarEstado));
router.get('/:id', asyncWrapper(controller.obtenerProductoPorId));

module.exports = router;
