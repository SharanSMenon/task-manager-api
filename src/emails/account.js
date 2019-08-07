const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'sharansajivmenon@gmail.com',
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name} Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'sharansajivmenon@gmail.com',
        subject: `Goodbye ${name}`,
        text: `We are so sad to see you leave. Was there anything we could do to keep you as a customer.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}