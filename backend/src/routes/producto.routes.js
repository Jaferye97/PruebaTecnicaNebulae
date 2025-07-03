const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');

router.get('/obtenerTodosPaginacion', controller.obtenerTodosPaginacion);

module.exports = router;
