const handleValidationError = (err, res) => {
    let errors = err.errors.map(el => el.message);
    if (errors.length > 1) {
        let chain = "";
        errors.forEach(error => {
            chain += `${error} || `
        });
        const string = chain.slice(0, -4);
        res.status(400).send({ messages: string })
    } else {
        res.status(400).send({ message: errors })
    }
}

const typeError = (err, req, res, next) => {
    const errorOrigin = err.origin;
    console.error(err.name);
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        return resutError = handleValidationError(err, res);
    } else {
        if (errorOrigin === undefined) {
            res.status(500).send("Ha habido un error, pero no se donde...")
        } else {
            res.status(500).send({ message: `Ha habido un fallo en los controladores de ${errorOrigin}` })
        }
    }
}

module.exports = { typeError }