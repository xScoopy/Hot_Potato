//mailgun dependencies

const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

//mailgun auth
const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.EMAIL_DOMAIN
    }
}
//create mailer
const nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports.sendMail = (email) => {
    nodemailerMailgun.sendMail({
        from: 'no-reply@example.com',
        to: email,
        subject: 'Hot Potato',
        text: "You lost a game of hot potato. Bummer."
    })
}