const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/producto.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);

module.exports = app;
