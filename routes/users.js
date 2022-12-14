const express = require('express');
const router = express.Router();
const { body,check } = require('express-validator')
const usersController = require("../controllers/usersController");

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


//VALIDACION FORMULARIO REGISTRO USUARIOS
const validations = [
  check('date').notEmpty().withMessage(''),
  check('nombre').notEmpty().withMessage('Escribí tu nombre'),
  check('apellido').notEmpty().withMessage('Escribí tu apellido'),
  check('email').isEmail().withMessage('Escribe un email valido'),
  check('password').notEmpty().isLength({min: 8}).withMessage('Tu contraseña debe contener al menos 8 caracteres')
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
router.post("/register",[
  check('date').notEmpty().withMessage(''),
  body('nombre').isLength({min:1}).withMessage('Escribí tu nombre'),
  check('apellido').notEmpty().withMessage('Escribí tu apellido'),
  check('email').isEmail().withMessage('Escribe un email valido'),
  check('password').notEmpty().isLength({min: 8}).withMessage('Tu contraseña debe contener al menos 8 caracteres')
],usersController.store);

// usuarios

router.get("/login", usersController.login);
router.post("/login", usersController.loginProcess);
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