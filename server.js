// GUIDE USED FOR SERVER SETUP - https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61
// GUIDE USED FOR MAILER SETUP - https://blog.mailtrap.io/react-send-email/

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// Create a GET route
app.get('/express_backend', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Transporter config
const nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
	host: 'smtp.gmail.com',
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('All works fine, yaaas!');
	}
});

// Route to inbox config
app.use(express.json()); app.post('/send', (req, res, next) => {
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message

	var mail = {
		from: name,
		to: ' /* RECIPIENT EMAIL HERE */ ',
		subject: 'Enquiry from portfolio site',

		html: message
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				msg: 'fail'
			})
		} else {
			res.json({
				msg: 'success'
			})
		}
	})
})