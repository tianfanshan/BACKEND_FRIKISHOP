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
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async getAll(req, res) {
        try {
            res.send(
                await Order.findAll({
                    include: [
                        { model: Product, through: { attributes: ["amount"] } },
                    ],
                })
            );
        } catch (error) {
            console.error(error);
            res.send('Algo ha salido mal...')
        }
    },
    async getById(req, res) {
        try {
            res.send(
                await Order.findByPk(req.params.id, {
                    include: [
                        { model: Product, through: { attributes: ["amount"] } },
                    ],
                })
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema ' })
        }
    },
}

module.exports = OrderController