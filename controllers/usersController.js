const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const {validationResult}= require('express-validator');

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  shoppingcart: (req, res) => {
    res.render("shoppingcart");
  },
  profile: (req, res) => {
    res.render("profile");
  },
  store: (req, res) => {
    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "uDefault-image.jpeg";
    }    
    let hashPassword = bcrypt.hashSync(req.body.password,10);
    let newUser = {
      id: users[users.length - 1].id + 1,
      date: req.body.date,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: hashPassword,
      user_type: req.body.user_type,
      img: image,
    };
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null));
    res.redirect("/users/profile");
  }
};

module.exports = usersController;
