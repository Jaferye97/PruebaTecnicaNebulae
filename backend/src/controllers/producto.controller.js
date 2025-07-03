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

exports.crear = async (req, res) => {
  const response = await service.crear(req.body);
  res.json(response);
};

exports.editar = async (req, res) => {
  const response = await service.editar(req.params.id, req.body);
  res.json(response);
};

exports.cambiarEstado = async (req, res) => {
  const response = await service.cambiarEstado(req.params.id);
  res.json(response);
};
