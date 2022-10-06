const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

// Principal
router.get('/', mainController.index)

// usuarios
router.get('/register', mainController.register)
router.get('/login', mainController.login)
router.post('/register', mainController.register)
router.post('/login', mainController.login)

// productos
// router.get('/productindex', mainController.productindex)
// productos detallados
router.get('/products', mainController.products)
router.get('/product/:id', mainController.product)

// shoppingK
router.get('/shoppingcart', mainController.shoppingcart)

// administrado & users
router.get('/newproduct', mainController.newproduct)
router.post('/newproduct', mainController.newproduct)
router.get('/modifyproduct', mainController.modifyproduct)
router.post('/modifyproduct', mainController.modifyproduct)

// prueba


module.exports = router;