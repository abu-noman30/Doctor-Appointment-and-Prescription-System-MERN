const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const patientSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	fullname: {
		type: String,
		required: true
	},
	phonenumber: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	cpassword: {
		type: String,
		required: true
	},
	birthdate: {
		type: Date,
		default: Date.now(),
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	bloodgroup: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	occupation: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now(),
		required: true
	},

	appointments: [
		{
			username: {
				type: String,
				required: true
			},
			fullname: {
				type: String,
				required: true
			},
			date: {
				type: Date,
				default: Date.now(),
				required: true
			},
			time: {
				type: String,
				required: true
			},
			message: {
				type: String,
				required: true
			},
			doctor: {
				type: String,
				required: true
			}
		}
	],

	isDoctor: {
		type: Boolean,
		required: true
		//default: false
	},
	isAdmin: {
		type: Boolean,
		default: false
	},

	tokens: [
		{
			token: {
				type: String,
				required: true
			}
		}
	]
});

// Hashing Password for Security...
patientSchema.pre('save', async function (next) {
	try {
		if (this.isModified('password')) {
			this.password = await bcrypt.hash(this.password, 12);
			this.cpassword = await bcrypt.hash(this.cpassword, 12);
		}
		next();
	} catch (err) {
		console.log(err);
	}
});

//Generating User Authintication(generateAuthToken()....)
patientSchema.methods.generateAuthToken = async function () {
	try {
		let authToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
		this.tokens = this.tokens.concat({ token: authToken });
		await this.save();
		return authToken;
	} catch (err) {
		console.log(err);
	}
};

//Store Appointment Data....
patientSchema.methods.addAppointment = async function (username, fullname, date, time, message, doctor) {
	try {
		this.appointments = this.appointments.concat({ username: username, fullname: fullname, date: date, time: time, message: message, doctor: doctor });
		await this.save();
		return this.appointments;
	} catch (err) {
		console.log(err);
	}
};

// COLLECTION CREATION.....
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
