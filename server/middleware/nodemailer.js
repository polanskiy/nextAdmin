const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'info@dasyatravel.ru',
    pass: 'fedora321',
  },
}, {
  from: 'DASYA TRAVEL <info@dasyatravel.ru>',
});


const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log('не удалось отправить письмо');
    console.log('письмо отправлено', info);
  });
};

module.exports = mailer;
