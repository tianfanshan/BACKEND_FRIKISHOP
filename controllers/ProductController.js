const { Product, Categorie, Review, Sequelize } = require('../models/index.js')
const { Op } = Sequelize;


const ProductController = {
    async create(req, res) {
        try {
            const newProduct = await Product.create({...req.body, img: req.file.filename })
            res.status(201).send({ message: 'Se ha añadido el producto correctamente', newProduct })
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async findAll(req, res) {
        try {
            res.send(
                await Product.findAll({ include: [Categorie] })
            )
        } catch (error) {

            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async update(req, res) {
        try {
            await Product.update({...req.body, img: req.file.filename }, {
                where: {
                    id: req.params.id
                }
            })
            const productUpdated = await Product.findByPk(req.params.id);
            res.send({ message: `Producto con id ${req.params.id} actualizado con éxito`, productUpdated });
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            await Review.destroy({
                where: {
                    ProductId: req.params.id
                }
            })
            res.send(`El producto con id ${req.params.id} junto con su review ha sido eliminado con éxito`)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async getById(req, res) {
        try {
            res.send(
                await Product.findByPk(req.params.id, { include: [Categorie] })
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
    async getOneByName(req, res) {
        try {
            res.send(await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
                include: [Categorie]
            }))
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    },
    async filterByPrice(req, res) {
        try {
            res.send(await Product.findAll({
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
                await Product.findAll({
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

module.exports = ProductController