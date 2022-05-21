const express = require('express');
const CategorieController = require('../controllers/CategorieController');
const router = express.Router();

router.post('/', CategorieController.create)
router.get('/', CategorieController.getAll)
router.get('/id/:id', CategorieController.getById)
router.get('/search/:name', CategorieController.getByName)
router.put('/id/:id', CategorieController.update)

module.exports = router;