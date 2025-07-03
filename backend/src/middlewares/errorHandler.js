module.exports = (err, req, res, next) => {
  console.error('Error inesperado:', err);

  res.status(500).json({
    ok: false,
    message: 'Ha ocurrido un error inesperado, por favor, comunicarse con el equipo de soporte.',
  });
};
