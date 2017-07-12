const express = require('express');
const routes = express.Router();
const messengerController = require('./messenger.controller');

routes.use('/send', messengerController.sendMessageAction);

module.exports = routes;