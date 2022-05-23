const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

router.post('/', UserController.create)
router.get('/login', UserController.login)
router.put('/id/:id', authentication, UserController.update)
router.delete('/id/:id', isAdmin, authentication, UserController.delete)
router.get('/', isAdmin, authentication, UserController.findAll)
router.delete('/logout', authentication, UserController.logout)
router.get('/currentTokens', isAdmin, authentication, UserController.currentTokens)

module.exports = router;