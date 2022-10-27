const express = require('express');
const router = express.Router();

// const mainController = require("../controllers/mainController");
// const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");

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

/* GET users listing. */

// createUsers
router.get("/register", usersController.register);
router.post("/register", upload.any(), usersController.store);

// usuarios

router.get("/login", usersController.login);
router.post("/login", usersController.login);
// router.post("/register", usersController.register);

//PerfilUsuario
router.get("/profile", usersController.profile);
// router.post("/login", usersController.login);

// shoppingK
router.get("/shoppingcart", usersController.shoppingcart);



module.exports = router;