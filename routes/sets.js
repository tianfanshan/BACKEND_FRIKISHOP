const express = require('express');
const SetController = require('../controllers/SetController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

router.post('/', authentication, isAdmin, SetController.create)
    //* CRUD
    //* Endpoint que extraiga todos los sets con sus productos
    //* Endpoint que extraiga todas las categorias que hay en los sets


module.exports = router;