const dynamo = require('dynamodb');

//Set configuration
dynamo.AWS.config.update({
    accessKeyId: config.AWS.DYNAMODB.ACCESS_KEY, 
    secretAccessKey: config.AWS.DYNAMODB.SECRET, 
    region: config.AWS.DYNAMODB.REGION
});

module.exports = dynamo;