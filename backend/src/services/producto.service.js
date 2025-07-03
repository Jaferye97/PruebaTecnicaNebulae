const model = require('../models/producto.model');

exports.obtenerTodosPaginacion = async (nombre, categoria, pagina, cantidadRegistros) => {
  const filters = {};
  if (nombre) {
    filters.nombre = { $regex: nombre, $options: 'i' };
  }
  if (categoria) {
    filters.categoria = { $regex: categoria, $options: 'i' };
  }

  const inicioSaltoRegistros = (pagina - 1) * cantidadRegistros;

  const total = await model.cantidadFiltro(filters);

  const productos = await model.obtenerProductosPaginacion(
    filters,
    inicioSaltoRegistros,
    cantidadRegistros
  );

  return {
    ok: true,
    datos: productos,
    total,
    pagina,
    totalPaginas: Math.ceil(total / cantidadRegistros),
  };
};
