const express = require('express');
const SetController = require('../controllers/SetController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

router.post('/', authentication, isAdmin, SetController.create)
router.put('/id/:id', authentication, isAdmin, SetController.update)
router.delete('/id/:id', authentication, isAdmin, SetController.delete)
router.get('/name/:name', SetController.getOneByName)




module.exports = router;