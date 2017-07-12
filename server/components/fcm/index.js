const express = require('express');
const routes = express.Router();
const fcmController = require('./fcm.controller');

routes.post('/send', fcmController.sendAction)

module.exports = routes;