var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

    srevice: '',
    auth: {
        user: '',
        pass: ``

    };
});
var mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: ``

};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent' + info.response);
    }
})
