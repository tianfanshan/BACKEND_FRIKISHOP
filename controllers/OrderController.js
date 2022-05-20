const { Order } = require('../models/index.js')

const OrderController = {
    async create(req, res) {
        try {
            req.body.paid = false
            await Order.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = OrderController