const service = require('../services/producto.service');

exports.obtenerTodosPaginacion = async (req, res) => {
  try {
    const { nombre, categoria, pagina = 1, cantidadRegistros = 10 } = req.query;

    const data = await service.obtenerTodosPaginacion(
      nombre,
      categoria,
      pagina,
      parseInt(cantidadRegistros)
    );
    res.json(data);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({
      ok: false,
      message: 'Error al obtener productos',
    });
  }
};
