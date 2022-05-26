const { Review, User, Product, Categorie, Sequelize } = require('../models/index.js');
const { Op } = Sequelize

const ReviewController = {
    async create(req, res) {
        try {
            const newReview = await Review.create({...req.body, UserId: req.user.id })
            res.status(201).send({ message: 'Se ha añadido correctamente', newReview })
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async findAll(req, res) {
        try {
            res.send(
                await Review.findAll({ include: [User] })
            )
        } catch (error) {

            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async findAllProduct(req, res) {
        try {
            res.send(
                await Product.findAll({ include: [Categorie, Review] })
            )
        } catch (error) {

            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async getById(req, res) {
        try {
            res.send(
                await Product.findByPk(req.params.id, { include: [Categorie, Review] })
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema' })
        }
    },
    async update(req, res) {
        try {
            const updateds = await Review.update({...req.body, UserId: req.user.id }, {
                where: {
                    [Op.and]: [
                        { id: req.params.id },
                        { UserId: req.user.id }
                    ]
                }
            })
            res.send({ message: `Se han modificado:`, updateds })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async delete(req, res) {
        try {
            await Review.destroy({
                where: {
                    id: req.params.id,
                    UserId: req.user.id
                }
            })

            res.send(`La review con id ${req.params.id}  ha sido eliminada con éxito`)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    }
}

module.exports = ReviewController