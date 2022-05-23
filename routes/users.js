const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const authentication = require('../middelware/authentication')


router.post('/', UserController.create)
router.get('/login', UserController.login)
router.put('/id/:id', authentication, UserController.update)
router.delete('/id/:id', authentication, UserController.delete)
router.get('/', UserController.findAll)



module.exports = router;