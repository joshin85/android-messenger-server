const admin = require("firebase-admin");
const serviceAccount = require("../../../android-messenger.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;