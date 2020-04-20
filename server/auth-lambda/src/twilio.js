const twilio = require('twilio')

const {
  accountSid,
  authToken
} = require('./config')


module.exports = new twilio.Twilio(accountSid, authToken)