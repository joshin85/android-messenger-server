const User = require('./user.model');
const promisify = require('es6-promisify');

class userService {

    constructor() {
      this.androidCreateUser.bind(this);
      this.findOrCreate.bind(this);
      this.createOrUpdate.bind(this);
    }

    get(email) {
        return promisify(User.get)(email)
            .then(user => user ? user.attrs : null);
    }

    update(json) {
        return promisify(User.update)(json);
    }

    put(json) {
        console.log(json);
        return promisify(User.create)(json);
    }

    addToken(user, token) {
        if(!user.fcmTokens.includes(token)) {
            user.fcmTokens.push(token);
        }
        return user
    }

    androidCreateUser(username, token) {
        let user = createEmptyUser(username, token);
        return this.createOrUpdate(user)
            .catch(err => console.log(err));
    }

    createOrUpdate(user) {
        console.log("user", user);
        return this.get(user.email)
            .then(result => {
                if(result) {
                    return this.update(user);
                } else {
                    console.log("resutl", result);
                    return this.put(user);
                }
            }).catch(err => {
                 console.log("err", err);
            })
    }

    findOrCreate(user, cb) {
        this.createOrUpdate(user)
            .then(result => {
                cb(null, user);
            })
            .catch(err => cb(err, null));
    }

    parseUser(profile) {
        return {
            email: profile.emails[0].value,
            name : profile.name.givenName,
            oauthId: profile.id,
            provider: profile.provider,
            settings: {
                nickname: profile.displayName
            },
            fcmTokens: []
        }
    }
}

function createEmptyUser(username, token) {
    return {
        email: username,
        name: "",
        age: 0,
        provider : "",
        oauthId : "",
        settings: {
            nickname: ""
        },
        fcmTokens: [token]
    }
}

module.exports = new userService();