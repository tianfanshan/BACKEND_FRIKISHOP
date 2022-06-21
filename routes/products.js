const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication');
const { uploadProductsImages } = require('../middelware/imgsource');






router.post('/', authentication, isAdmin, uploadProductsImages.single('upload'), ProductController.create)
router.get('/', ProductController.findAll)
router.put('/id/:id', authentication, isAdmin, uploadProductsImages.single('upload'), ProductController.update)
router.delete('/id/:id', authentication, isAdmin, ProductController.delete)
router.get('/id/:id', ProductController.getById)
router.get('/name/:name', ProductController.getOneByName)
router.get('/filter/pricemin/:min/pricemax/:max', ProductController.filterByPrice)
router.get('/order', ProductController.orderPrice)

module.exports = router;