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
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                res.send('Email/contraseña incorrectos')
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                res.send('Email/contraseña incorrectos')
            }
            res.send({ message: 'Eres un crack, fiera, mastodonte', user })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserController