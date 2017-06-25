const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//User service
const User = require('../../components/user/user.service');

module.exports = function (passport) {


    passport.initialize()
    passport.session();

    //Add google authentication
    passport.use(new GoogleStrategy({
            clientID: config.GOOGLE.AUTH.CLIENT_ID,
            clientSecret: config.GOOGLE.AUTH.CLIENT_SECRET,
            callbackURL: config.GOOGLE.AUTH.CALLBACK_URL,
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, cb) {
            req.accessToken = accessToken;
            req.profile = profile;
            User.findOrCreate(User.parseUser(profile), function (err, user) {
                return cb(err, user);
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}