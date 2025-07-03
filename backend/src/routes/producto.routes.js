const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');

router.get('/obtenerTodosPaginacion', controller.obtenerTodosPaginacion);
router.post('/', controller.crear);
router.put('/:id', controller.editar);
router.patch('/:id/CambiarEstado', controller.cambiarEstado);

module.exports = router;
