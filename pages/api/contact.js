const PASSWORD = process.env.EMAIL_PASSWORD
const FROM_EMAIL = process.env.FROM_EMAIL
const TO_EMAIL = process.env.TO_EMAIL

export default async function (req, res) {

  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
  });
  console.log(req.body)


const mailData = {
  from: FROM_EMAIL,
  to: TO_EMAIL,
  subject: `Aural Gym Message from ${req.body.name}`,
  text: `${req.body.message} | Sent from ${req.body.email} via Aural Gym`,
  html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
}

await new Promise((resolve, reject) => {

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      reject(err)
    } else {
      console.log(info)
      resolve(info)
    }
  })

})


res.status(200)
res.send("Success!")

}