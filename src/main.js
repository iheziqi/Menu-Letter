import { emailHTML } from './emailTemplate.js';
import { sendEmail } from './sendEmail.js';

// all users array
const receivers = ['heziqi4399@gmail.com', 'renshuang1993@gmail.com', '942851168@qq.com', 'yqli0916@gmail.com']
// const receivers = ['ziqi.he@fau.de', 'heziqi4399@gmail.com', 'yqli0916@gmail.com']

// send email to every user;
receivers.forEach((receiver) => {
	emailHTML()
		.then((data) => {
			sendEmail(receiver, data);
		})
		.catch((err) => {
		console.log(err);
	});
});

// send email;
// sendEmail('heziqi4399@gmail.com', html);
