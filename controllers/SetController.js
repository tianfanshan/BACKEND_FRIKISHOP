const { Set, Categorie, Review, Sequelize } = require('../models/index.js')
const { Op } = Sequelize;

const SetController = {
    async create(req, res) {
        try {
            const newSet = await Set.create({...req.body })
            res.status(201).send({ message: 'Se ha añadido el Set correctamente', newSet })
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },

    async update(req, res) {
        try {
            await Set.update({...req.body }, {
                where: {
                    id: req.params.id
                }
            })
            const SetUpdated = await Set.findByPk(req.params.id);
            res.send({ message: `Set con id ${req.params.id} actualizado con éxito`, SetUpdated });
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async delete(req, res) {
        try {
            await Set.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.send(`El Set con id ${req.params.id} ha sido eliminado con éxito`)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },

    async getOneByName(req, res) {
        try {
            res.send(await Set.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },

            }))
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async filterByPrice(req, res) {
        try {
            res.send(await Set.findAll({
                limit: 200,
                where: {
                    price: {
                        [Op.gte]: [`${+req.params.min}`],
                        [Op.lte]: [`${+req.params.max}`],
                    }
                },
                include: [Categorie]
            }))
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async orderPrice(req, res) {
        try {
            res.send(
                await Set.findAll({
                    order: [
                        ['price', 'DESC']
                    ]
                }, { include: [Categorie] })
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    }

}

module.exports = SetController