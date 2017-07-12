const userService = require('./user.service');

class userController {
    
    createUserAction(req, res) {
        let json = req.body;
        userService.put(json)
            .then(response => {
                res.send(response);
            })
            .catch(err => {
                res.send(err);
            });
    }

    getUserAction(req, res) {
        let query = req.query;
        let username = query.username;
        console.log(username);
        userService.get(username)
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                res.send(err);
            });
    }

    addTokenToUserAction(req, res) {
        console.log("Registering new token");
        let json = req.body;
        let username = json.username;
        let registrationToken = json.registrationToken;
        userService.androidCreateOrUpdateUser(username, registrationToken)
            .then(result => res.send(result))
            .catch(err => res.send(err));
    }
}

module.exports = new userController();