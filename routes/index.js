const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

// Principal
router.get('/', mainController.index)

// usuarios
router.get('/register', mainController.register)
router.get('/login', mainController.login)

// productos
router.get('/productindex', mainController.productindex)
router.get('/shoppingcart', mainController.shoppingcart)

// administrado & users
router.get('/newproduct', mainController.newproduct)
router.get('/modifyproduct', mainController.modifyproduct)


module.exports = router;