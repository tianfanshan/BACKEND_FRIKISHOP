const { Product } = require('../models/index.js')

const ProductController = {
    async create(req, res) {
        try {

            await Product.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = ProductController