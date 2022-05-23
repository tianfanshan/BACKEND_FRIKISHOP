const { Order, Product } = require('../models/index.js')

const OrderController = {
    async create(req, res) {
        try {
            req.body.paid = false
            await Order.create({...req.body, UserId: req.user.id })
            res.status(201).send('Se ha creado el pedido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    },
    async getAll(req, res) {
        try {
            res.send(
                await Order.findAll({ include: Product })
            );
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = OrderController