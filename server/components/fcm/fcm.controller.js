const fcmService = require('./fcm.service');
const userService = require('../user/user.service');
class fcmController {

    sendAction(req, res) {
        let body = req.body;
        let message = body.message;
        let sender = body.sender;
        let conversationId = body.conversationId;
        console.log("Body", conversationId, message);
        userService.get(conversationId)
            .then(conversation => fcmService.sendMessage(conversation.fcmTokens, sender, message))
            .then(result => res.send(result))
            .catch(err => res.send(err));
    }
}

module.exports = new fcmController();