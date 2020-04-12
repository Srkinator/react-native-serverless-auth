const twilio = require('twilio')

const {
  accountSid,
  authToken
} = require('./twilio.config')


module.exports = new twilio.Twilio(accountSid, authToken)