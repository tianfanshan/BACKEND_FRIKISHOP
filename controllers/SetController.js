const { Set } = require('../models/index.js')

const SetController = {
    async create(req, res) {
        try {
            await Set.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = SetController