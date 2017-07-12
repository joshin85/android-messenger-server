const jwt = require('./session/jwt');
const User = require('../components/user/user.service');

class authController {
    AuthenticateUserAction(req, res) {
        let profile = req.profile;
        jwt.issueToken(req, res);
        res.redirect(`${config.UI.baseUrl}/home`);
    }
}

module.exports = new authController();