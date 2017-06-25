const connector = require('./fcm.connector.js');
const messenger = connector.messaging();

class fcmService {
    sendMessage(tokens, sender, message) {
        let msg = { 
            notification : {
                "title" : message,
                "body" : "from " + sender 
            }
        }   
        let messages = tokens.map(token => {
            console.log(token);
            return connector.messaging().sendToDevice(token, msg)
        })        
        return Promise.all(messages);
    }
}

module.exports = new fcmService();