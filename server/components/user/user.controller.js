const userService = require('./user.service');

class userController {
    
    createUser(req, res) {
        let json = req.body;
        userService.put(json)
            .then(response => {
                res.send(response);
            })
            .catch(err => {
                res.send(err);
            });
    }

    getUser(req, res) {
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

    addTokenToUser(req, res) {;
        let json = req.body;
        let username = json.username;
        let registrationToken = json.registrationToken;
        console.log("=-=========================ADDING TOKEN", registrationToken)
        userService.androidCreateUser(username, registrationToken)
            .then(result => res.send(result))
            .catch(err => res.send(err));
    }
}

module.exports = new userController();