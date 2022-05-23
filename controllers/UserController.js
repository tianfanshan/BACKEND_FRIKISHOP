const { User, Token } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { use } = require('express/lib/application');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
    async create(req, res) {
        try {
            req.body.role = "user" //TODO hay que modificar el diagrama
            if (!req.body.email || !req.body.password || !req.body.adress || !req.body.username) {
                return res.send('Rellene todos los campos')
            }
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
            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token: token, UserId: user.id })
            res.send({ message: 'Eres un crack, fiera, mastodonte', user, token })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserController