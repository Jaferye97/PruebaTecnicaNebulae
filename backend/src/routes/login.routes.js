const express = require('express');
const router = express.Router();
const controller = require('../controllers/login.controller');
const asyncWrapper = require('../middlewares/asyncWrapper');

router.post('/', asyncWrapper(controller.login));

module.exports = router;
