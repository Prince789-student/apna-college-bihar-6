/**
 * Strict Input Validation Middleware using Zod.
 * Validates req.body, req.query, and/or req.params against strict schemas.
 * Rejects invalid inputs with HTTP 400 Bad Request before hitting controllers.
 */

const validate = ({ body, query, params }) => {
    return (req, res, next) => {
        try {
            if (body) {
                const parsedBody = body.parse(req.body);
                req.body = parsedBody; // assign validated and typed data
            }
            if (query) {
                const parsedQuery = query.parse(req.query);
                req.query = parsedQuery;
            }
            if (params) {
                const parsedParams = params.parse(req.params);
                req.params = parsedParams;
            }
            next();
        } catch (error) {
            if (error.name === 'ZodError') {
                return res.status(400).json({
                    success: false,
                    message: 'Validation failed: Invalid input provided.',
                    errors: error.errors.map(err => ({
                        path: err.path.join('.'),
                        message: err.message
                    }))
                });
            }
            next(error);
        }
    };
};

module.exports = validate;
