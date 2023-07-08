
const notFound = (request, response, next) => {
    const error = new Error(`Route Introuvable -> Not Found - ${request.originalUrl}`);
    response.status(400);
    next(error)
}

const errorHandler = (err,request , response, next) => {
    let statusCode = request.statusCode === 200 ? 500 : response.statusCode
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = "Resource not found - Objet introuvable"
    }

    response.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export {
    notFound,
    errorHandler
}