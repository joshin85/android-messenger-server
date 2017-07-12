const jwt = require('./session/jwt')
const cookieName = config.JWT.COOKIE;

module.exports = function(req, res, next) {
    try {
        let cookie = req.cookies;
        let webToken = cookie[cookieName];
        let token = jwt.decodeToken(webToken);
        if(token.username) {
            req.token = token;
            next();
        }    
    } catch(e) {
        res.send("Failed to authenticate user", 401);
    }
}