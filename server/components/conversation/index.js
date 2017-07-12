const express = require('express');
const routes = express.Router();
const conversationController = require('./conversation.controller');

routes.use(require('../../auth/auth.middleware'));

routes.use('/create', conversationController.createConversationAction);

module.exports = routes;