const admin = require('firebase-admin');

const twilioClient = require('./twilio');
const helpers = require('./helpers');
const { twilioConfig: { generatedPhoneNumber } } = require('./config')
const handleError = helpers.handleError;
const handleSuccess = helpers.handleSuccess;

module.exports = function(event, context, callback) {
  const body = JSON.parse(event.body);
  const phone = parseInt(String(body.phone).replace(/[^\d]/g, ""));

  if (!phone) {
    return handleError(context, { error: 'You must provide an phone' });
  }

  const db = admin.database();

  admin.auth().getUser(phone)
    .then(userRecord => {
      const user = userRecord.toJSON();
      const code = ~~(Math.random() * 8999 + 1000);

      twilioClient.messages.create({
        body: 'Your code is ' + code,
        to: phone,
        from: generatedPhoneNumber
      }, (err) => {
        if (err) { return handleError(context, err); }

        db.ref('users/' + phone).update({ code: code, codeValid: true }, () => {
          handleSuccess(context, { success: true });
        });
      });
    })
    .catch(() => handleError(context, { error: 'User not found' }));
}