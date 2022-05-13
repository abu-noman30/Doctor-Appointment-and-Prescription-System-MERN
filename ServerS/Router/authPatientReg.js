const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Authenticate = require('../Middleware/Authenticate.js');

// Connecting Database.......
require('../DB/connection.js');

//Definning Schema..........
const Patient = require('../Models/patientSchema.js');

//Get Cookie by using CookieParser........
router.use(cookieParser());

router.get('/', (req, res) => {
	res.send('Hello world from the Server Router app...');
});

// patientSignup(REGISTration) ROUTE....
router.post('/Signup', async (req, res) => {
	const { username, fullname, phonenumber, email, password, cpassword, birthdate, gender, bloodgroup, occupation, address, isDoctor } = req.body;

	console.log(req.body);
	//console.log(req.body.name);
	//console.log(req.body.email);
	//console.log(name);
	//console.log(phone);

	if (
		!username ||
		!fullname ||
		!phonenumber ||
		!email ||
		!password ||
		!cpassword ||
		!birthdate ||
		!gender ||
		!bloodgroup ||
		!occupation ||
		!address ||
		!isDoctor
	) {
		return res.status(422).json('Plz fill the filed properly');
	}

	//res.json({ message: req.body });
	//res.send('My Register Page');
	try {
		const userExist1 = await Patient.findOne({ email: email });
		const userExist2 = await Patient.findOne({ username: username });

		if (userExist1) {
			return res.status(422).json('Email  already Exists');
		} else if (userExist2) {
			return res.status(422).json('Username already Exists');
		} else if (password !== cpassword) {
			return res.status(422).json('Password are not Matching');
		} else {
			const nPatient = new Patient({
				username,
				fullname,
				phonenumber,
				email,
				password,
				cpassword,
				birthdate,
				gender,
				bloodgroup,
				occupation,
				address,
				isDoctor
			});

			//Hashing password funcion will work here.....(patientSchema--->patientSchema.pre('save', function (next))
			const nPatientReg = await nPatient.save();
			// await nPatient.save();

			if (nPatientReg) {
				res.status(201).json('User Registered Successfully');
			} else {
				res.status(500).json('Failed to Register');
			}
		}
	} catch (err) {
		console.log(err);
	}
});

// SIGNIN(LOGIN) ROUTE

router.post('/Signin', async (req, res) => {
	try {
		//console.log(req.body);
		//res.json({ message: 'Login SUCCESSFULLY' });

		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(422).json('Plz fill the DATA properly');
		} else {
			// Email matching.....
			const userLogin = await Patient.findOne({ email: email });
			//console.log(userLogin);
			if (!userLogin) {
				return res.status(400).json('Email does not FOUND...Plz...Signup');
			} else {
				// Password matching.....
				const passMatch = await bcrypt.compare(password, userLogin.password);

				if (!passMatch) {
					return res.status(400).json('Password does not match.');
				} else {
					//User Authintication(JWToken........)
					const authToken = await userLogin.generateAuthToken();
					// console.log(authToken);

					res.cookie('jwtToken', authToken, {
						expires: new Date(Date.now() + 25892000000)
					});

					//return res.json({ message: req.body });

					res.json({ isDoctor: userLogin.isDoctor, isAdmin: userLogin.isAdmin });
					console.log('Doctor', userLogin.isDoctor);
					console.log('Admin', userLogin.isAdmin);
					//return res.send(userLogin.isDoctor);
				}
			}
		}
	} catch (err) {
		console.log(err);
	}
});

//---------------------(AUTHENTICATION)--------------------------

// User GET ALL Database Data from MongoDB .... ....
router.get('/GetPatientdata', async (req, res) => {
	try {
		const Patientdata = await Patient.find();
		res.status(201).json(Patientdata);
		console.log(Patientdata);
		// res.send('OK..');
	} catch (err) {
		res.status(404).json(err);
		console.log(err);
	}
});

//User GET all Appointment Data........
router.get('/Appointment', Authenticate, (req, res) => {
	//console.log('Hello___About___World__Server!');
	res.send(req.verifyRootUser);
});

// User Authentication for Appointment(Middleware) ....
router.post('/Appointment', Authenticate, async (req, res) => {
	const { username, fullname, date, time, message, doctor } = req.body;
	if (!date || !time || !message || !doctor) {
		console.log('Error in Appointment_Server');
		return res.json({ error: 'Plz fill the Appintment Form' });
	}
	const userAvailable = await Patient.findOne({ _id: req.userID });
	if (userAvailable) {
		const userAppointment = await userAvailable.addAppointment(username, fullname, date, time, message, doctor);

		console.log(userAppointment);
		await userAvailable.save();
		res.status(201).json({ message: 'Patient Appointment successfully' });
	}
	//console.log('Hello___Appoinment___World__Server!');
});

// User Authentication for About(Middleware) ....
router.get('/About', Authenticate, (req, res) => {
	//console.log('Hello___About___World__Server!');
	res.send(req.verifyRootUser);
});

// User GET Appointmentlist Data from MongoDB .... ....
router.get('/GetAppoientmentdata', async (req, res) => {
	try {
		const Appointmentdata = await Patient.find();
		res.status(201).json(Appointmentdata);
		console.log(Appointmentdata);
		// res.send('OK..');
	} catch (err) {
		res.status(404).json(err);
		console.log(err);
	}
});

//  User DELETE Patient Data from MongoDB .... ....

router.delete('/Delete/:id', async (req, res) => {
	try {
		console.log(req.params);
		const { id } = req.params;

		const deleteuser = await Patient.findByIdAndRemove({ _id: id });
		res.status(201).json(deleteuser);
		console.log('Datas Deleted Successfully');
	} catch (err) {
		res.status(404).json(err);
		console.log(err);
	}
});

// Logout User....
// router.get('/Logout', (req, res) => {
// 	//console.log('Hello___Logout___World__Server!');
// 	res.clearCookie('jwtToken', { path: '/Signin' });
// 	res.status(200).send('User LOGOUT SUCCESSFULLY....');
// });

module.exports = router;
