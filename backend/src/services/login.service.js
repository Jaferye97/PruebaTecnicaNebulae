const model = require('../models/login.model');

exports.login = async (numInterno, email) => {
  const filters = {
    numInterno: parseInt(numInterno),
    email: email,
  };

  const usuario = await model.obtenerUsuarioLogin(filters);

  if (!usuario) {
    return {
      ok: false,
      message: 'Usuario no encontrado',
    };
  }

  return {
    ok: true,
    datos: usuario,
  };
};
