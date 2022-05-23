const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication } = require('../middelware/authentication')
router.post('/', UserController.create)
router.get('/login', UserController.login)




module.exports = router;