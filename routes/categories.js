const express = require('express');
const CategorieController = require('../controllers/CategorieController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

router.post('/', authentication, isAdmin, CategorieController.create)
router.get('/', CategorieController.getAll)
router.get('/id/:id', CategorieController.getById)
router.get('/search/:name', CategorieController.getByName)
router.put('/id/:id', authentication, isAdmin, CategorieController.update)
router.delete('/id/:id', authentication, isAdmin, CategorieController.deleteById)

module.exports = router;