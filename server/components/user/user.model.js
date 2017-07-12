const dynamo = require('dynamodb');
const db = require('../db/db.connector');
const Joi = require('joi');

const User = db.define('user', {
    hashKey: 'email',
    timestamps: true,
    schema: {
        userId: dynamo.types.uuid(),
        email: Joi.string().email(),
        name: Joi.string().allow('').optional(),
        age: Joi.number().optional(),
        provider : Joi.string().allow('').optional(),
        oauthId : Joi.string().allow('').optional(),
        settings: {
            nickname: Joi.string().allow('').optional()
        },
        conversations: Joi.array().items(Joi.string()),
        fcmTokens: Joi.array().items(Joi.string())
    },
    tableName: 'user'
});

module.exports = User;