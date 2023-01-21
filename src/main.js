import { emailHTML } from './emailTemplate.js';
import { sendEmail } from './sendEmail.js';
import { readFileSync } from 'fs';

// const receivers = readFileSync('/code/mensa_scraping/receivers.txt', 'utf8').toString().split('\n');
const receivers = readFileSync('/code/mensa_scraping/test_only_receiver.txt', 'utf8').toString().split('\n');
receivers.pop();
console.log(receivers);

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
