const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./config.json');
const createUser = require('./create-user');
const requestOneTimePassword = require('./request-one-time-password');
const verifyOneTimePassword = require('./verify-one-time-password');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-4cdaa.firebaseio.com"
});


exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
