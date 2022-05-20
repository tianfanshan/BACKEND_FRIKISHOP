const { Categorie } = require('../models/index.js')

const CategorieController = {
    async create(req, res) {
        try {

            await Categorie.create({...req.body })
            res.status(201).send('Se ha añadido correctamente')
        } catch (error) {
            console.log(error);
            res.send('Algo ha salido mal...')
        }
    }
}

module.exports = CategorieController