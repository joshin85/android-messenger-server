const express = require('express');
const router = express.Router();

//passport
const passport = require('passport');
router.use(passport.initialize());
router.use(passport.session());
require('./google.passport')(passport);

//Use Json web token
const jwtController = require('../session/jwt');
const authController = require('../auth.controller');

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'https://www.googleapis.com/auth/plus.login',
  	, 'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }), (req, res) => {
        authController.AuthenticateUserAction(req, res);
    });

module.exports = router