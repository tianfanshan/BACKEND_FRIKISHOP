const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')

const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage })




router.post('/', authentication, isAdmin, upload.single('upload'), ProductController.create)
router.get('/', ProductController.findAll)
router.put('/id/:id', authentication, isAdmin, ProductController.update)
router.delete('/id/:id', authentication, isAdmin, ProductController.delete)
router.get('/id/:id', ProductController.getById)
router.get('/name/:name', ProductController.getOneByName)
router.get('/filter/pricemin/:min/pricemax/:max', ProductController.filterByPrice)
router.get('/order', ProductController.orderPrice)

module.exports = router;