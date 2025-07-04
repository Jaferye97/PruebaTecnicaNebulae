const service = require('../services/login.service');

exports.login = async (req, res) => {
  const { numInterno, email } = req.body;

  const response = await service.login(numInterno, email);
  res.json(response);
};
