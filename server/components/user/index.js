const express = require('express');
const routes = express.Router();
const userController = require('./user.controller');

routes.put('/create', userController.createUser);
routes.get('/', userController.getUser);
routes.put('/token', userController.addTokenToUser)

module.exports = routes;