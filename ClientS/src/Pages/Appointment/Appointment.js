import React, { useEffect, useState } from 'react';
import * as Icon from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import appointmentimg from '../../Assets/Images/appointment.jpg';
import NavbarPatient from '../../Components/NavbarPatient.js';
import './Appointment.css';

const Appointment = () => {
	const iniState = {
		username: '',
		fullname: '',
		date: '',
		time: '',
		message: '',
		doctor: ''
	};

	const navigate = useNavigate();
	const [userData, setUserData] = useState(iniState);
	const [docData, setDocData] = useState([]);

	//Storing Appointment Data.................................

	//Here iniState

	const handlerOnchange = (e) => {
		let tgname = e.target.name;
		let tgvalue = e.target.value;

		setUserData({ ...userData, [tgname]: tgvalue });
	};
	//Send(POST) Data to Database..........................................
	const handlerOnsubmitPostData = async (e) => {
		e.preventDefault();

		const postData = {
			username: userData.username,
			fullname: userData.fullname,
			date: userData.date,
			time: userData.time,
			message: userData.message,
			doctor: userData.doctor
		};

		const res = await fetch('/Appointment', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData)
		});
		const data = await res.json();

		if (!data) {
			alert('Appointment FAILL...');
		} else {
			alert('Appointment SUCCESSFULL..');
			setUserData({ ...userData, message: '', doctor: '' });
		}
	};

	//GET Patient Data From Database..........................

	const handlerOnCallAppointment = async () => {
		try {
			const res = await fetch('/Appointment', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			});

			const data = await res.json();
			console.log(data);

			//Pass  Data to State dinamically for access the data..
			setUserData({
				...userData,
				username: data.username,
				fullname: data.fullname
			});

			//ErrorStatusCode....
			const ErrCode = res.status;

			if (ErrCode === 200 || !data) {
				console.log(data);
			} else if (!ErrCode === 200) {
				const error = new Error(res.error);
				console.log(error);
			} else {
				console.log(data);
			}
		} catch (err) {
			console.log(err);
			navigate('/Signin');
		}
	};

	useEffect(() => {
		handlerOnCallAppointment();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//GET Doctors Data From Database..........................
	const getDocData = async () => {
		try {
			const res = await fetch('/GetPatientdata', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			});

			const data = await res.json();
			console.log(data);

			//Pass  Data to State dinamically for access the data..
			setDocData(data);

			//ErrorStatusCode....
			const ErrCode = res.status;

			if (!ErrCode === 200 || !data) {
				const error = new Error(res.error);
				console.log(error);
			} else {
				console.log(data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getDocData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Get Prescription Data...............
	const handlerOnClick = () => {
		navigate('/PDF');
	};
	//Get Appointment  Data...............
	return (
		<>
			<NavbarPatient />
			<div className='container mt-5 mb-5 shadow-lg'>
				<div className='card-header bg-success bg-opacity-25 text-primary text-start mt-5 shadow-lg'>
					<h2>Appoinment System</h2>
				</div>

				<section id='appointment' className='appointment-inner'>
					<div className='row'>
						<div className='col-sm-7'>
							<img
								src={appointmentimg}
								className='img-fluid mb-2'
								alt='Appoientment'
							/>
							<input
								type='button'
								value='view Appointment'
								className='btn btn-secondary active mb-2 me-2'
							/>
							<input
								type='button'
								value='Prescription'
								onClick={handlerOnClick}
								className='btn btn-secondary active mb-2'
							/>
						</div>

						<div className='col-sm-5 mt-2'>
							<form method='POST'>
								<div className='tab_content'>
									<div className='tabs_item'>
										<div className='input-group'>
											<span className='input-group-addon'>
												<Icon.BsFillPeopleFill />
											</span>
											<input
												type='text'
												value={userData.username}
												onChange={handlerOnchange}
												name='username'
												id='username'
												required
												className='form-control ms-2'
												placeholder='Your Username'
											/>
										</div>
										<div className='input-group'>
											<span className='input-group-addon'>
												<Icon.BsFillPeopleFill />
											</span>
											<input
												type='text'
												value={userData.fullname}
												onChange={handlerOnchange}
												name='username'
												id='username'
												required
												className='form-control ms-2'
												placeholder='Your Full Name'
											/>
										</div>

										<div className='input-group'>
											<span className='input-group-addon'>
												<Icon.BsFillPeopleFill />
											</span>
											<input
												type='date'
												name='date'
												value={userData.date}
												onChange={handlerOnchange}
												className='form-control datepicker3 ms-2'
												required
												placeholder='yyyy-mm-dd'
											/>
											<input
												id='appt-time'
												type='time'
												name='time'
												value={userData.time}
												onChange={handlerOnchange}
												className='form-control datepicker3 ms-2'
												placeholder='Appointment time'
												required
											></input>
										</div>

										<div className='input-group'>
											<span className='input-group-addon'>
												<Icon.BsFillPeopleFill />
											</span>
											<select
												className='form-control ms-2'
												onChange={handlerOnchange}
												value={userData.doctor}
												required
												name='doctor'
											>
												<option value=''>--Select Doctor--</option>
												{docData.map((item) =>
													item.isDoctor === true ? (
														<option>{item.fullname}</option>
													) : (
														''
													)
												)}
												{/* <option>Dr. Ahsan Ali</option>
												<option>Dr. Numayer Chowdhury</option>
												<option>Dr. Bob Bisshash</option>
												<option>Dr. Nur Hossain</option> */}
											</select>
										</div>

										<div className='form-group mb-2'>
											<textarea
												className='form-control'
												name='message'
												id='message'
												value={userData.message}
												onChange={handlerOnchange}
												placeholder='Write about your Illness...'
												rows='5'
											></textarea>
										</div>
										<div>
											<input
												type='button'
												value='Appointment'
												onClick={handlerOnsubmitPostData}
												className='btn btn-primary active mb-2'
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Appointment;
