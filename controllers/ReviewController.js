const { Review } = require('../models/index.js')

const ReviewController = {
    async create(req, res) {
        try {
            await Review.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = ReviewController