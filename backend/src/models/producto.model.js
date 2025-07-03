const { getDB } = require('../config/mongo');

const COLLECTION = 'producto';

exports.obtenerProductosPaginacion = async (filtros, inicioSaltoRegistros, cantidadRegistros) => {
  const db = await getDB();
  return await db
    .collection(COLLECTION)
    .find(filtros)
    .skip(inicioSaltoRegistros)
    .limit(cantidadRegistros)
    .toArray();
};

exports.cantidadFiltro = async (filtros) => {
  const db = await getDB();
  return await db.collection(COLLECTION).countDocuments(filtros);
};
