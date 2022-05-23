const { User, Token, Review, Order, Product, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const { Op } = Sequelize
const jwt = require('jsonwebtoken');
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
    async findAll(req, res) {
        try {
            res.send(
                await User.findAll({ include: [{ model: Order, include: [{ model: Product }] }] })
            )
        } catch (error) {

            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
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
    },
    async update(req, res) {
        try {
            const user = await User.update({...req.body }, {
                where: {
                    id: req.params.id
                }
            })
            res.send({ message: `Usuario con id ${req.params.id} actualizado con éxito`, user });
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async delete(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            await Order.destroy({
                where: {
                    ProductId: req.params.id
                }
            })
            await Review.destroy({
                where: {
                    ProductId: req.params.id
                }
            })

            res.send(`El usuario con id ${req.params.id} (junto con su order y su review) ha sido eliminado con éxito`)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        }
    },
    async currentTokens(req, res) {
        try {
            res.send(
                await Token.findAll({ include: User })
            )
        } catch (error) {

            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },



}

module.exports = UserController