import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';

const smtpInfo = readFileSync('/code/mensa_scraping/smtp_user_info.txt', 'utf8').toString().split('\n');
smtpInfo.pop();
const user = smtpInfo[0];
const pass = smtpInfo[1];


export function sendEmail(receiver, menuHTML) {

	let transporter = nodemailer.createTransport({
		host: 'smtp.qq.com',
		post: 587,
		secure: false,
		auth: {
			user: user, 
			pass: pass,
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
