const dynamo = require('dynamodb');
const db = require('../db/db.connector');
const Joi = require('joi');

const Conversation = db.define('conversations', {
    hashKey: 'conversationId',
    timestamps: true,
    schema: {
        conversationId: dynamo.types.uuid(),
        members: Joi.array().items(Joi.object().keys({
            username: Joi.string().optional(),
            phoneNumber: Joi.string()
        })),
        title : Joi.string().allow('').optional(),
        description : Joi.string().allow('').optional(),
        image : Joi.string().allow('').optional(),
        messages: Joi.array().items(Joi.object().keys({
            messageId: dynamo.types.uuid(),
            timestamp : Joi.date(),
            readBy: Joi.array().items(Joi.string()),
            message : Joi.string()
        }))
    },
    tableName: 'conversations'
});

module.exports = Conversation;