const express = require('express');
const router = express.Router();
const { body,check } = require('express-validator')

// MULTER

const multer = require("multer");
const path = require("path");

//STORAGE

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    const newFileName =
      "user" + "_" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

let upload = multer({ storage: storage });
const usersController = require("../controllers/usersController");

//VALIDACION FORMULARIO REGISTRO USUARIOS
const validations = [
  body('date').notEmpty().withMessage(''),
  body('nombre').notEmpty().withMessage('Escribí tu nombre'),
  body('apellido').notEmpty().withMessage('Escribí tu apellido'),
  body('email').isEmail().withMessage('Escribe un email valido'),
  body('password').notEmpty().isLength({min: 8}).withMessage('Tu contraseña debe contener al menos 8 caracteres'),
 ]

// const mainController = require("../controllers/mainController");
// const productsController = require("../controllers/productsController");

// RUTAS

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// createUsers
router.get("/register", usersController.register);
router.post("/register",validations,usersController.store);

// usuarios

router.get("/login", usersController.login);
router.post("/login", usersController.login);
// router.post("/register", usersController.register);

//PerfilUsuario
router.get("/profile", usersController.profile);
router.get("/profile/:id", upload.any(),usersController.profile);

// router.post("/register", upload.any(), usersController.store);
router.post("/profile", upload.any(),usersController.store);
router.post("/profile",validations,usersController.store);
router.post("/profile/:id", upload.any(),usersController.store);

// router.post("/login", usersController.login);

// shoppingK
router.get("/shoppingcart", usersController.shoppingcart);

module.exports = router;