import nodemailer from 'nodemailer';


export function sendEmail(receiver, menuHTML) {

	let transporter = nodemailer.createTransport({
		host: 'smtp.qq.com',
		post: 587,
		secure: false,
		auth: {
			user: '1006577139@qq.com',
			pass: 'wykxtygeuxtabcaa',
		},
	});

	let mailOptions = {
		from: '"Your everyday Menu Board" <1006577139@qq.com>',
		to: receiver,
		subject: 'Check out all menu boards of mensa!',
		html: menuHTML,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log(`Message sent: ${info.messageId}`);
	});

}
