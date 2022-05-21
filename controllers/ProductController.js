const { Product, Categorie } = require('../models/index.js')

const ProductController = {
    async create(req, res) {
        try {

            await Product.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    },
    async getAll(req, res) {

        try {
            res.send(
                await Product.findAll({ include: [Categorie] })
            )


        } catch (error) {

            console.log(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }

    }

}

module.exports = ProductController