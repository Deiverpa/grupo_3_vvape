const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator')

// VALIDACIONES
// let d = new Date();
//      let year = d.getFullYear();
//      let month = d.getMonth();
//      let day = d.getDate();
//      let cA = new Date(year - 18, month, day).toDateString();
//      let cB = new Date(year - 65, month, day).toDateString();

// req.checkBody('datadenasc','Error: Invalid Date of Birth!').isBefore(cA).isAfter(cB);


const registerForm = [
  body('date').notEmpty().withMessage(''),
  body('nombre').notEmpty().withMessage('Escribí tu nombre'),
  body('colores').isLength({min: 1}).withMessage('Elige un color'),
  body('email').isEmail().withMessage('Escribe un email valido'),
  body('edad').notEmpty().withMessage('debe ser numero').custom(value =>{
    if(isNaN(value)||value.isLength<1){
      throw new Error('No es un numero')
    }else{
      return true
    }
  }),
]

// const mainController = require("../controllers/mainController");
// const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");


// MULTER

const multer = require("multer");
const path = require("path");

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


// RUTAS

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// createUsers
router.get("/register", usersController.register);
// router.post("/register", upload.any(), usersController.store);
router.post("/profile", upload.any(),usersController.store);
router.post("/profile",registerForm,usersController.store);
router.post("/profile/:id", upload.any(),usersController.store);

// usuarios

router.get("/login", usersController.login);
router.post("/login", usersController.login);
// router.post("/register", usersController.register);

//PerfilUsuario
router.get("/profile", usersController.profile);
router.get("/profile/:id", upload.any(),usersController.profile);
// router.post("/login", usersController.login);

// shoppingK
router.get("/shoppingcart", usersController.shoppingcart);

module.exports = router;