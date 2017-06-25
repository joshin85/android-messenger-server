const jwt = require('jwt-simple');
const secret = config.JWT.SECRET;
const cookieName = config.JWT.COOKIE;

class jwtController {

    issueToken(req, res) {
        let accessToken = req.accessToken;
        let profile = req.profile;
        let json = {
            username : profile.displayName
        }

        let token = jwt.encode(JSON.stringify(json), secret);

        res.cookie(cookieName, token);
    }

    decodeToken(cookie) {
        let contents = jwt.decode(cookie, secret);
        let json = JSON.parse(contents);
        return json;
    }
}

module.exports = new jwtController();