const { Order, Product, ProductOrders, Sequelize } = require('../models/index.js')
const { Op } = Sequelize

const OrderController = {
    async create(req, res) {
        try {

            req.body.paid = false
            const order = await Order.create({...req.body, UserId: req.user.id })

            req.body.forEach(async element => {
                await ProductOrders.create({...element, OrderId: order.id })
            });

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