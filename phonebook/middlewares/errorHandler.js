const errorHandler = (err, req, res, next) => {
  console.log(err.statusCode);
  console.log(err.message);
  res.status(err.statusCode || 400).send(err.message || "something went wrong");
};

module.exports = { errorHandler };
