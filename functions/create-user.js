const admin = require('firebase-admin');


module.exports = async function (req, res) {
  if (!req.body.phone) {
    return res.status(422).send({
      error: 'Bad Input'
    })
  }

  try {
    const phone = String(req.body.phone).replace(/[^\d]/g, "")

    const user = await admin.auth().createUser({ uid: phone })

    res.send(user)
  } catch (error) {
    return res.status(422).send({
      error
    })
  }


}