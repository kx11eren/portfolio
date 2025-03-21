const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);  // Log the error stack trace
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ message });
};

module.exports = errorMiddleware;