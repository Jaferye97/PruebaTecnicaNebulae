const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const { corsMiddleware } = require('./middlewares/cors');

const productoRoutes = require('./routes/producto.routes');
const loginRoutes = require('./routes/login.routes');

const app = express();
app.use(corsMiddleware());
app.use(express.json());

app.use('/api/producto', productoRoutes);
app.use('/api/login', loginRoutes);

app.use(errorHandler);

module.exports = app;
