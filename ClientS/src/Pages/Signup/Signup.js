import React, { useState } from 'react';
import * as BSIcon from 'react-icons/bs';
import * as FAIcon from 'react-icons/fa';
import * as AIIcon from 'react-icons/ai';
import * as MDIcon from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../../Components/NavbarHome.js';
import './Signup.css';

const Signup = () => {
	const iniState = {
		username: '',
		fullname: '',
		phonenumber: '',
		email: '',
		password: '',
		cpassword: '',
		birthdate: '',
		gender: '',
		bloodgroup: '',
		occupation: '',
		address: '',
		isDoctor: ''
	};

	const navigate = useNavigate();
	const [patient, setPatient] = useState(iniState);

	const handlerOnchange = (e) => {
		// const { tgname, tgvalue } = e.target;
		// setPatient({ ...patient, [tgname.name]: tgvalue.value });

		let tgname, tgvalue;
		tgname = e.target.name;
		tgvalue = e.target.value;
		setPatient({ ...patient, [tgname]: tgvalue });
	};

	const handlerOnsubmitPostData = async (e) => {
		e.preventDefault();
		const postData = {
			username: patient.username,
			fullname: patient.fullname,
			phonenumber: patient.phonenumber,
			email: patient.email,
			password: patient.password,
			cpassword: patient.cpassword,
			birthdate: patient.birthdate,
			gender: patient.gender,
			bloodgroup: patient.bloodgroup,
			occupation: patient.occupation,
			address: patient.address,
			isDoctor: patient.isDoctor
		};
		const res = await fetch('/Signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData)
		});
		//console.log(res);
		const data = await res.json();
		//console.log(data);
		//ErrorCodeAccess--->res.status
		const ErrCode = res.status;

		if (ErrCode === 422 || !data) {
			//console.log(ErrCode);
			console.log(data);
			alert(data);
		} else {
			console.log(data);
			alert(data);

			navigate('/Signin');
		}
	};

	return (
		<>
			<NavbarHome />
			<div className='container mt-5 mb-5 shadow-lg'>
				<div className='card-header bg-success bg-opacity-25 text-primary text-start mt-5 mb-5 shadow-lg'>
					<h2>REGISTER</h2>
				</div>
				<div className='signup-form'>
					<form method='POST'>
						<div className='tabs_item'>
							<div className='input-group'>
								<label className='mt-1' htmlFor='username'>
									<BSIcon.BsFillPeopleFill />
								</label>
								<input
									type='text'
									id='username'
									name='username'
									className='form-control ms-2'
									value={patient.username}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Enter Username'
									required
								/>
							</div>
							<div className='input-group'>
								<label className='mt-1' htmlFor='fullname'>
									<BSIcon.BsFillPeopleFill />
								</label>
								<input
									type='text'
									id='fullname'
									name='fullname'
									className='form-control ms-2'
									value={patient.fullname}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Enter Your Full name'
									required
								/>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='phone'>
									<BSIcon.BsFillTelephoneFill />
								</label>
								<input
									type='number'
									className='form-control ms-2'
									name='phonenumber'
									id='phone'
									value={patient.phonenumber}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Phone Number'
									required
								/>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='email'>
									<BSIcon.BsEnvelopeFill />
								</label>
								<input
									type='email'
									className='form-control ms-2'
									id='email'
									name='email'
									value={patient.email}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Email Address'
									required
								/>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='password'>
									<BSIcon.BsFileLock2Fill />
								</label>
								<input
									type='password'
									className='form-control ms-2'
									id='password'
									name='password'
									value={patient.password}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Password'
									required
								/>
							</div>
							<div className='input-group'>
								<label className='mt-1' htmlFor='password'>
									<BSIcon.BsFileLock2Fill />
								</label>
								<input
									type='password'
									className='form-control ms-2'
									id='cpassword'
									name='cpassword'
									value={patient.cpassword}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Confirm Password'
									required
								/>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='birth_date'>
									<BSIcon.BsFillCalendarMonthFill />
								</label>
								<input
									type='date'
									className='form-control datepicker1 ms-2'
									name='birthdate'
									value={patient.birthdate}
									autoComplete='off'
									placeholder='Birthdate'
									required
									onChange={handlerOnchange}
								/>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='gender'>
									<BSIcon.BsGenderAmbiguous />
								</label>
								<input
									type='gender'
									className='form-control ms-2'
									id='gender'
									name='gender'
									value={patient.gender}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Gender'
									required
								/>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='bloodgroup'>
									<MDIcon.MdBloodtype />
								</label>
								<input
									type='bloodgroup'
									className='form-control ms-2'
									id='bloodgroup'
									name='bloodgroup'
									value={patient.bloodgroup}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Blood Group'
								/>
							</div>
							<div className='input-group'>
								<label className='mt-1' htmlFor='occupation'>
									<MDIcon.MdOutlineWork />
								</label>
								<textarea
									className='form-control ms-2'
									id='occupation'
									name='occupation'
									value={patient.occupation}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Occupation Name: Full Details...'
									maxLength='120'
								></textarea>
							</div>

							<div className='input-group'>
								<label className='mt-1' htmlFor='bloodgroup'>
									<FAIcon.FaRegAddressCard />
								</label>
								<textarea
									className='form-control ms-2'
									id='address'
									name='address'
									value={patient.address}
									onChange={handlerOnchange}
									autoComplete='off'
									placeholder='Address'
									maxLength='120'
								></textarea>
							</div>
							<div className='input-group mt-2'>
								<label className='mt-1' htmlFor='selectuser'>
									<AIIcon.AiOutlineUser />
								</label>
								<select
									className='form-control ms-2'
									name='isDoctor'
									onChange={handlerOnchange}
								>
									<option>Select One</option>
									<option value='true'>Doctor</option>
									<option value='false'>Patient</option>
								</select>
							</div>

							<button
								type='submit'
								className='btn btn-primary active ms-4'
								onClick={handlerOnsubmitPostData}
							>
								REGISTER
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
