const express = require('express');
const CategorieController = require('../controllers/CategorieController');
const router = express.Router();

router.post('/', CategorieController.create)

module.exports = router;