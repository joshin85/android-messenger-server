const express = require('express');
const routes = express.Router();
const userController = require('./user.controller');

routes.put('/create', userController.createUserAction);
routes.get('/', userController.getUserAction);
routes.put('/token', userController.addTokenToUserAction)

module.exports = routes;