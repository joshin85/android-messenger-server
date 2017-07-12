const conversationService = require('./conversation.service');
const userService = require('../user/user.service');

class conversationController {
    createConversationAction(req, res) {
        let body = req.body;
        let members = body.members;
        let title = body.title;
        let description = body.description;
        let image = body.image;
        let messages = [];
        conversationService.createConversation(title, description, members, image)
            .then(result => res.send(result))
            .then()
            .catch(err => res.send(err, 400));
    }

    addConversationTouser(conversation) {

    }
}

module.exports = new conversationController();