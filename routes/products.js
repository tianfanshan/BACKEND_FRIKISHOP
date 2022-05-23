const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')


router.post('/', authentication, isAdmin, ProductController.create)
router.get('/', ProductController.findAll)
router.put('/id/:id', authentication, isAdmin, ProductController.update)
router.delete('/id/:id', authentication, isAdmin, ProductController.delete)
router.get('/id/:id', ProductController.getById)
router.get('/name/:name', ProductController.getOneByName)
router.get('/filter/pricemin/:min/pricemax/:max', ProductController.filterByPrice)
router.get('/order', ProductController.orderPrice)

module.exports = router;