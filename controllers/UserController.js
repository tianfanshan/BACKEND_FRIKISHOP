const { User } = require('../models/index.js')

const UserController = {
    async create(req, res) {
        try {
            req.body.role = "user" //TODO hay que modificar la tabla
            await User.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = UserController