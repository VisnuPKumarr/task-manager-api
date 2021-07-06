const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pkvisnu4@gmail.com',
        subject: 'Welcome to task Manager app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pkvisnu4@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

// sgMail.send({
//     to: 'pkvisnu4@gmail.com',
//     from: '6vishnu.pk@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you.'
// })