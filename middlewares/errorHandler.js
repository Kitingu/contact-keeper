const handlers = {
  async handle404(req, res, next) {
    const error = new Error("Resource not found");
    error.status = 404;
    next(error);
  },
  async handle500(error, req, res, next) {
    res.status(error.status || 500);
    res.status(error.status || 500).send({
      error: error.message,
    });
    
  }
};

module.exports = handlers;
