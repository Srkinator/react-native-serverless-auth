const functions = require('firebase-functions');
const admin = require('firebase-admin');
const createUser = require('./create-user');
const serviceAccount = require('../config.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-4cdaa.firebaseio.com"
});


exports.createUser = functions.https.onRequest(createUser);
