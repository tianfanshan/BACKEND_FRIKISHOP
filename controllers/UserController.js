const { User, Token, Review, Order, Product, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const { Op } = Sequelize
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']
const transporter = require('../config/nodemailer');

const UserController = {
    async create(req, res, next) {
        try {
            req.body.role = "user"
                // req.body.confirmed = false
                if (req.file) req.body.img = req.file.filename
                
            const hashedPassword = await bcrypt.hashSync(req.body.password, 10)
            const user = await User.create({...req.body, password: hashedPassword });
            // const emailToken = await jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn: '48h' })
            // const url = "http://localhost:8080/users/confirm/" + emailToken
            // await transporter.sendMail({
            //     to: req.body.email,
            //     subject: "Confirma tu registro",
            //     html: `<h2>¡Hola ${user.username}!</h2>
            //     <p>Para finalizar registro <a href=${url}>haz click aquí</a> UwU</p>
            //     `
            // })
            res.status(201).send({ message: 'Se ha creado un usuario', user })
        } catch (error) {
            error.origin = "User";
            next(error)
        }
    },
    async findAll(req, res) {
        try {
            res.send(
                await User.findAll({ include: [{ model: Order, include: [{ model: Product }] }] })
            )
        } catch (error) {

            console.error(error)
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
            // if (!user.confirmed) {
            //     res.send(200).send('No has verificado el usuario, revisa tu correo.')
            // }
            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token: token, UserId: user.id })
            res.send({ message: 'Eres un crack, fiera, mastodonte', user, token })
        } catch (error) {
            console.error(error);
        }
    },
    async getInfo(req, res) {
        try {

            const user = await User.findByPk(req.user.id,{ include: [{ model: Order, include: [{ model: Product }] }] })

            res.send(user)
        } catch (error) {
            res.status(500).send({ message: 'Ha habido un problema ' })
            console.error(error)
        }
    },
    async update(req, res) {
        try {
            const user = await User.update({...req.body }, {
                where: {
                    id: req.user.id
                }
            })
            const userUpdated = await User.findByPk(req.user.id)
            res.send({ message: `Usuario con id ${req.user.id} actualizado con éxito`, userUpdated });
        } catch (error) {
            console.error(error)
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
                    id: req.params.id
                }
            })
            await Review.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.send(`El usuario con id ${req.params.id} (junto con su order y su review) ha sido eliminado con éxito`)
        } catch (error) {
            console.error(error)
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
            console.error(error)

            res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        }
    },
    async currentTokens(req, res) {
        try {
            res.send(
                await Token.findAll({ include: User })
            )
        } catch (error) {

            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    // async validateUser(req, res) {
    //     try {
    //         const payload = jwt.verify(req.params.token, jwt_secret)
    //         User.update({ confirmed: true }, {
    //             where: {
    //                 email: payload.email
    //             }
    //         })
    //         res.status(201).send(`El usuario ha sido verificado ^^`)
    //     } catch (error) {
    //         res.status(404).send(`Enlace no valido`)
    //     }
    // }
}

module.exports = UserController