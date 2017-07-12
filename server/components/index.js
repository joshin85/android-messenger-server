const express = require('express');
const routes = express.Router();

routes.use('/user', require('./user'));
routes.use('/conversation', require('./conversation'));
routes.use('/messenger', require('./messenger'));
routes.use('/fcm', require('./fcm'));

module.exports = routes;