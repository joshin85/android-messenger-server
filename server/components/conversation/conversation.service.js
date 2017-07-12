const Conversation = require('./conversation.model');
const promisify = require('es6-promisify');

class conversationService {

    update(coversation) {
        return promisify(Conversation.update)(coversation);
    }

    put(conversation) {
        return promisify(Conversation.create)(conversation);
    }

    get(conversationId) {
        return promisify(Conversation.get)(conversationId);
    }

    delete(conversationId) {
        return promisify(Conversation.delete)(conversationId);
    }

    createConversation(title, description, members, image) {
        return this.put({
            title,
            description,
            image,
            members,
            messages : []
        });
    }

    createMessage(conversation, message) {
        conversation.messages.unshift({
            timestamp : new Date().getTime(),
            readBy : [],
            message
        });
        if(conversation.messages.length > 100)
            conversation.pop();
    }
}

module.exports = new conversationService();