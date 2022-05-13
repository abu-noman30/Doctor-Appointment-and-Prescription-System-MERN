const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose
	.connect(DB)
	.then((resolve) => {
		console.log('Database Connected SUCCESSFULLY...');
	})
	.catch((error) => {
		console.log('Database Connection FAILED....');
	});
