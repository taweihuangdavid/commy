//Not used in this project, since already used "express-async-errors"
//to monkey patch all the routes in try catch blocks

module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};
