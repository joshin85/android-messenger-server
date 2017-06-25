const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const express = require('express');
const router = express.Router();

router.use(require('./google'));

module.exports = router