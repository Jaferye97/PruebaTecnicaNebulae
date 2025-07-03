const { getDB } = require('../config/mongo');
const { ObjectId } = require('mongodb');

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

exports.crear = async (producto) => {
  const db = await getDB();
  const { insertedId } = await db.collection(COLLECTION).insertOne(producto);
  return { ...producto, _id: insertedId };
};

exports.editar = async (id, data) => {
  const db = await getDB();
  await db.collection(COLLECTION).updateOne({ _id: new ObjectId(id) }, { $set: data });
  return { _id: id, ...data };
};

exports.obtenerProductoPorId = async (id) => {
  const db = await getDB();
  return await db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
};
