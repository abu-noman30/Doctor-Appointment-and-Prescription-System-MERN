import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../../Components/NavbarHome.js';
import './Signin.css';
//const Patient = require('../../../../ServerS/Models/patientSchema');

const Signin = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState('');

	//Sendind Data(POST) to the Server & GET isDoctor value from Server...........

	const handlerOnsubmitPostData = async (e) => {
		e.preventDefault();

		const postData = {
			email: email,
			password: password
		};
		const res = await fetch('/Signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData)
		});

		const data = await res.json();
		console.log('Admin', data.isAdmin);
		console.log('Doctor', data);

		//ErrorCodeAccess--->res.status
		const ErrCode = res.status;

		if (ErrCode === 400 || !data) {
			//console.log(ErrCode);
			alert('User Not Found...');
			navigate('/Signup', {
				replace: true
			});
			console.log('Error');
			console.log(data);

			//window.alert(data);
		} else {
			if (data.isDoctor === true && data.isAdmin === true) {
				if (user !== 'Doctor') {
					console.log(user);
					alert('User Not Matched...');
				} else {
					console.log('Admin', data.isAdmin);
					alert('Admin Login SUCCESSFULLY.....');
					navigate('/AdminDashboard');
				}
			}
			if (data.isDoctor === true && data.isAdmin === false) {
				if (user !== 'Doctor') {
					console.log(user);
					alert('User Not Matched...');
				} else {
					console.log(data.isDoctor);
					alert('Doctor Login SUCCESSFULLY.....');
					navigate('/Dashboard');
				}
			}
			if (data.isDoctor === false) {
				if (user !== 'Patient') {
					console.log(user);
					alert('User Not Matched...');
				} else {
					console.log(data.isDoctor);
					alert('Patient Login SUCCESSFULLY.....');
					navigate('/Scheme');
				}
			}
		}
	};

	return (
		<>
			<NavbarHome />
			<div className='container mt-5 pb-5 shadow-lg'>
				<div className='card-header bg-success bg-opacity-25 text-primary text-start shadow-lg'>
					<h2>LOGIN</h2>
				</div>
				<div className='login-wrapper'>
					<div className='login-form'>
						<form method='POST'>
							<div className='mb-3'>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									className='form-control'
									id='email'
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='example@gmail.com'
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='password'>Password:</label>
								<input
									name='password'
									className='form-control'
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Password'
								/>
							</div>

							<div className='form-group mb-3'>
								<select
									className='form-control'
									name='type'
									onChange={(e) => setUser(e.target.value)}
									required
								>
									<option>Select One</option>
									<option>Doctor</option>
									<option>Patient</option>
								</select>
							</div>
							<div className='d-grid '>
								<button
									className='btn btn-primary active col-sm-4'
									type='button'
									onClick={handlerOnsubmitPostData}
								>
									LOGIN
								</button>
							</div>
							<div className=' forgot-text'>
								<a href='e'>Forgot your password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signin;
