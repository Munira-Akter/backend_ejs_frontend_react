const globalErrorHandeler = (app) => {
    app.use("*", (req, res, next) => {
        const error = new Error("Bad Request");
        error.status = 400;
        next(error);
    });

    app.use((error, req, res, next) => {
        if (error.status) {
            return res.status(error.status).send(`<h1>${error.message}</h1>`);
        }
        res.status(500).send(`<h1>Internal Server Error</h1>`);
    });
};

module.exports = globalErrorHandeler;