const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const newFileName =
      "product" + "_" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

let upload = multer({ storage: storage });

// Principal
router.get("/", mainController.index);

// usuarios
router.get("/register", mainController.register);
router.get("/login", mainController.login);
router.post("/register", mainController.register);
router.post("/login", mainController.login);

// productos
router.get("/products", mainController.products);
// productos detallados
router.get("/products/:id", mainController.product);

// shoppingK
router.get("/shoppingcart", mainController.shoppingcart);

// createproduct
router.get("/newproduct", mainController.newproduct);
router.post("/products", upload.any(), mainController.store);

//modifyproduct
router.get("/products/:id/modifyproduct", mainController.modifyproduct);
router.post("/products/modify/:id", upload.any(), mainController.update);

// eliminar
router.post("/products/delete/:id", mainController.delete);

module.exports = router;
