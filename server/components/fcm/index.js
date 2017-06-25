const express = require('express');
const routes = express.Router();
const fcmController = require('./fcm.controller');

routes.post('/send', fcmController.send)

module.exports = routes;