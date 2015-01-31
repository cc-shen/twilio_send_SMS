//sendMessage.js

// const ACC_SID = "Enter Account SID";
// const AUTH_TOKEN = "Enter Authentication Token";
// const TWILIO_NUMBER = "Enter Twilio Number";

var client = require ('twilio') (ACC_SID, AUTH_TOKEN);
var readLine = require ('readline');

var r1 = readLine.createInterface({
	input: 		process.stdin,
	output: 	process.stdout
});

var phoneToText;
var textToSend;

r1.question("Enter phone number: ", function (phoneNum) {
	r1.question("Enter your text below...\n", function (text) {
		phoneToText = "+1" + phoneNum;
		textToSend = text;

		client.messages.create({
			body: 	textToSend,
			to:  	phoneToText,
			from: 	TWILIO_NUMBER
		});
		r1.close();
	});
});
