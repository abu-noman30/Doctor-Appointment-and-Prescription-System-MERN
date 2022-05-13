const express = require('express');
const dotenv = require('dotenv');
//const cors = require('cors');

// CONNECT TO THE SERVER..........
const app = express();

// CONNECT TO THE DATABASE (to avoid API key Block & Data Secure)........
dotenv.config({ path: './config.env' });
require('./DB/connection.js');
app.use(express.json());

// we link the router files to make our route easy.
app.use(require('./Router/authPatientReg.js'));
app.use(require('./Router/authPrescription.js'));

//app.use(cors());

const PORT = process.env.PORT;

// Middelware connection.

//middelware();
// app.get('/Signin', (req, res) => {
// 	console.log('MiddleWare is waiting for Login....');
// 	res.send('Hello___Login___World__Server!');
// });
// ............................

// app.get('/Signup', (req, res) => {
// 	res.send('Hello___Signup___World__Server!');
// });

// app.get('/Appoinment', (req, res) => {
// 	res.send('Hello___Appoinment___World__Server!');
// });
// app.get('/About', (req, res) => {
// 	res.send('Hello___About___World__Server!');
// });
// app.get('/Contact', (req, res) => {
// 	res.send('Hello___Contact___World__Server!');
// });

app.listen(PORT, () => {
	console.log(`Server is Running......at (Port: ${PORT})`);
});
