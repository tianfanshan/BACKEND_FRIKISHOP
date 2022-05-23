const express = require('express');
const ReviewController = require('../controllers/ReviewController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

router.post('/', authentication, ReviewController.create)
router.get('/', authentication, isAdmin, ReviewController.findAll)
router.get('/review_product', authentication, isAdmin, ReviewController.findAllProduct)
router.get('/review_product/id/:id', authentication, ReviewController.getById)
router.put('/id/:id', authentication, ReviewController.update)
router.delete('/id/:id', authentication, isAdmin, ReviewController.delete)

module.exports = router;