const { getDB } = require('../config/mongo');

const COLLECTION = 'usuario';

exports.obtenerUsuarioLogin = async (filtros) => {
  const db = await getDB();
  return await db.collection(COLLECTION).findOne(filtros);
};
