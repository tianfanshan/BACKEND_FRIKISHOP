const { Categorie, Product, Sequelize } = require('../models/index.js')
const { Op } = Sequelize;
const CategorieController = {
    async create(req, res) {
        try {
            await Categorie.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
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
            res.send('oki')
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
            console.log(error);
            res.send('Algo ha salido mal')
        }
    },
    async getById(req, res) {
        try {
            res.send(
                await Categorie.findByPk(req.params.id)
            )
        } catch (error) {
            console.log(error);
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
                    }
                })
            )
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal')
        }
    }
}
module.exports = CategorieController