const asyncWrapper = (controllerFn) => {
  return (req, res, next) => {
    Promise.resolve(controllerFn(req, res, next)).catch(next);
  };
};

module.exports = asyncWrapper;
