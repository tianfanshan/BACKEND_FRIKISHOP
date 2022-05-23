const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs');

const UserController = {
    async create(req, res) {
        try {
            req.body.role = "user" //TODO hay que modificar el diagrama
            const hashedPassword = bcrypt.hashSync(req.body.password, 10)
            const user = await User.create({...req.body, password: hashedPassword });
            res.status(201).send({ message: 'Se ha creado un usuario', user })
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = UserController