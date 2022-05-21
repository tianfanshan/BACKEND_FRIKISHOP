const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

router.post('/', ProductController.create)
router.get('/', ProductController.findAll)
router.put('/id/:id', ProductController.update)

module.exports = router;