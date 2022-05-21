const { Review, Product } = require('../models/index.js')

const ReviewController = {
    async create(req, res) {
        try {
            await Review.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    },
    async findAll(req, res) {
        try {
            res.send(
                await Review.findAll({ include: [Product] })
            )
        } catch (error) {

            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async update(req, res) {
        try {
            await Review.update({...req.body }, {
                where: {
                    id: req.params.id
                }
            })
            res.send(`Review con id ${req.params.id} actualizado con éxito`);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async delete(req, res) {
        try {
            await Review.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.send(`La review con id ${req.params.id}  ha sido eliminada con éxito`)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    }
}

module.exports = ReviewController