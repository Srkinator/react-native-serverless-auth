const createUser = require('./src/create-user');
const sendOneTimePassword = require('./src/send-one-time-password');
const verifyOneTimePassword = require('./src/verify-one-time-password');



module.exports = {
  createUser,
  sendOneTimePassword,
  verifyOneTimePassword
};