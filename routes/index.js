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
router.get('/productindex', mainController.productindex)
// productos detallados
router.get('/product1', mainController.product1)
router.get('/product2', mainController.product2)
router.get('/product3', mainController.product3)
router.get('/product4', mainController.product4)
router.get('/esencia1', mainController.esencia1)
router.get('/esencia2', mainController.esencia2)
router.get('/esencia3', mainController.esencia3)
router.get('/esencia4', mainController.esencia4)

// shoppingK
router.get('/shoppingcart', mainController.shoppingcart)

// administrado & users
router.get('/newproduct', mainController.newproduct)
router.get('/modifyproduct', mainController.modifyproduct)
router.post('/newproduct', mainController.newproduct)
router.post('/modifyproduct', mainController.modifyproduct)

module.exports = router;