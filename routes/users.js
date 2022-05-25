const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

router.post('/', UserController.create)
router.get('/login', UserController.login)
router.put('/id/:id', authentication, UserController.update)
router.delete('/id/:id', authentication, isAdmin, UserController.delete)
router.get('/', authentication, isAdmin, UserController.findAll)
router.delete('/logout', authentication, UserController.logout)
router.get('/currentTokens', authentication, isAdmin, UserController.currentTokens)
router.get('/confirm/:token', UserController.validateUser)

module.exports = router;