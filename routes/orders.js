const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')


router.post('/', authentication, OrderController.create)
router.get('/', authentication, isAdmin, OrderController.getAll)
router.get('/id/:id', authentication, isAdmin, OrderController.getById)


module.exports = router;