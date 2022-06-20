const { Categorie, Product, Sequelize } = require('../models/index.js')
const { Op } = Sequelize;

const CategorieController = {
    async create(req, res) {
        try {
            await Categorie.create({...req.body })
            res.status(201).send(`Se ha añadido ${req.body.name} a categorias`)
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async update(req, res) {
        try {
            await Categorie.update({...req.body }, {
                where: {
                    id: req.params.id
                }
            })
            const updatedCategorie = await Categorie.findByPk(req.params.id)
            res.send({ message: `Se ha modificado la categoria ${req.params.id}`, updatedCategorie })
        } catch (error) {
            res.send('Algo ha salido mal...')
        }
    },
    async deleteById(req, res) {
        try {
            const categorie = await Categorie.findByPk(req.params.id)
            if (!categorie) {
                return res.send(`La categoria con id ${req.params.id} no existe`)
            }
            await Categorie.destroy({
                where: { id: req.params.id }
            })
            res.send(`Se ha borrado la categoria con id: ${req.params.id}`)
        } catch (error) {
            res.send('Algo ha salido mal...')
        }
    },
    async getAll(req, res) {
        try {
            res.send(
                await Categorie.findAll({ include: [Product] })
            )
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal')
        }
    },
    async getById(req, res) {
        try {
            res.send(
                await Categorie.findByPk(req.params.id, { include: [Product] })
            )
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal')
        }
    },
    async getByName(req, res) {
        try {
            res.send(
                await Categorie.findAll({
                    where: {
                        name: {
                            [Op.like]: `%${req.params.name}%`
                        }
                    },
                })
            )
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal')
        }
    }
}

module.exports = CategorieController