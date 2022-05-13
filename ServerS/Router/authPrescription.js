const express = require('express');
const router = express.Router();

require('../DB/connection.js');
const Prescription = require('../Models/PrescriptionSchema.js');

router.get('/', (req, res) => {
	res.send('Hello world from the Server Router app...');
});

// Prescription (Generate) ROUTE....

router.post('/Prescription', async (req, res) => {
	try {
		const {
			fullname,
			phonenumber,
			birthdate,
			age,
			gender,
			bloodgroup,
			patientweight,
			patientBP,
			patientTemp,
			illnesshistory,
			medicineType,
			medicineName,
			medicineMG,
			medicineday,
			medicinedose,
			comments,
			overallComments,
			testname,
			testdescription,
			advice
		} = req.body;

		//console.log(req.body);
		//console.log(req.body.name);
		//console.log(req.body.email);
		//console.log(name);
		//console.log(phone);
		if (
			!fullname ||
			!phonenumber ||
			!birthdate ||
			!age ||
			!gender ||
			!bloodgroup ||
			!patientweight ||
			!patientBP ||
			!patientTemp ||
			!illnesshistory ||
			!medicineType ||
			!medicineName ||
			!medicineMG ||
			!medicineday ||
			!medicinedose ||
			!comments ||
			!overallComments ||
			!testname ||
			!testdescription ||
			!advice
		) {
			return res.status(422).json('Plz fill the filed properly');
		} else {
			const nPrescription = new Prescription({
				fullname,
				phonenumber,
				birthdate,
				age,
				gender,
				bloodgroup,
				patientweight,
				patientBP,
				patientTemp,
				illnesshistory,
				medicineType,
				medicineName,
				medicineMG,
				medicineday,
				medicinedose,
				comments,
				overallComments,
				testname,
				testdescription,
				advice
			});

			//Hashing password funcion will work here.....(patientSchema--->patientSchema.pre('save', function (next))
			const nPrescriptionGen = await nPrescription.save();

			if (nPrescriptionGen) {
				res.status(201).json('Prescription Generate SUCCESSFULLY...');
			} else {
				res.status(500).json('Failed to Generate Prescription');
			}
		}
	} catch (err) {
		console.log(err);
	}
});

// User GET Prescription Data from MongoDB .... ....

router.get('/GetPrescriptiondata', async (req, res) => {
	try {
		const Prescriptiondata = await Prescription.find();
		res.status(201).json(Prescriptiondata);
		console.log(Prescriptiondata);
	} catch (err) {
		res.status(404).json(err);
		console.log(err);
	}
});

module.exports = router;
