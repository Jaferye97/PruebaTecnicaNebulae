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

exports.crear = async (data) => {
  const nuevoProducto = await model.crear(data);

  return {
    ok: true,
    datos: nuevoProducto,
  };
};

exports.editar = async (id, data) => {
  const producto = await model.editar(id, data);

  return {
    ok: true,
    datos: producto,
  };
};

exports.cambiarEstado = async (id) => {
  const producto = await model.obtenerProductoPorId(id);

  if (!producto) {
    return { ok: false, message: 'Producto no encontrado' };
  }

  const nuevoEstado = !producto.activo;

  await this.editar(id, { activo: nuevoEstado });

  return {
    ok: true,
    message: `Estado actualizado a ${nuevoEstado}`,
  };
};

exports.obtenerProductoPorId = async (id) => {
  const producto = await model.obtenerProductoPorId(id);

  if (!producto) {
    return { ok: false, message: 'Producto no encontrado' };
  }

  return {
    ok: true,
    datos: producto,
  };
};
