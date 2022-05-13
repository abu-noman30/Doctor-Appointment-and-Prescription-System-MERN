const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');

const PrescriptionSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true
	},
	phonenumber: {
		type: Number,
		required: true
	},

	birthdate: {
		type: Date,
		default: Date.now(),
		required: true
	},
	age: {
		type: Number,
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

	patientweight: {
		type: String,
		required: true
	},
	patientBP: {
		type: String,
		required: true
	},
	patientTemp: {
		type: String,
		required: true
	},
	illnesshistory: {
		type: String,
		required: true
	},
	medicineType: {
		type: String,
		required: true
	},
	medicineName: {
		type: String,
		required: true
	},
	medicineMG: {
		type: String,
		required: true
	},
	medicineday: {
		type: String,
		required: true
	},
	medicinedose: {
		type: String,
		required: true
	},
	comments: {
		type: String,
		required: true
	},
	overallComments: {
		type: String
	},
	testname: {
		type: String,
		required: true
	},

	testdescription: {
		type: String,
		required: true
	},
	advice: {
		type: String,
		required: true
	}
});

// COLLECTION CREATION.....
const Prescription = mongoose.model('Prescription', PrescriptionSchema);
module.exports = Prescription;
