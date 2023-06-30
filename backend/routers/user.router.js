const express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const route = express.Router();
const userController = require('../controllers/user.controller')
  
route.post("/register",jsonParser, userController.register);

route.post("/login",jsonParser, userController.login);


module.exports = route