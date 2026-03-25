const CustomApiError = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    // Check if it's our custom error
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({ msg: err.message })  // ← Use err.statusCode and message
    }
    
    // For all other errors (database errors, syntax errors, etc)
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware