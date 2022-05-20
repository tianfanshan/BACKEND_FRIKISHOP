const express = require('express');
const SetController = require('../controllers/SetController');
const router = express.Router();

router.post('/', SetController.create)

module.exports = router;