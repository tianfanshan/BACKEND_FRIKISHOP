const express = require('express');
const ReviewController = require('../controllers/ReviewController');
const router = express.Router();

router.post('/', ReviewController.create)

module.exports = router;