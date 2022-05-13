import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../Assets/Images/profile.jpg';
import NavbarPatient from '../../Components/NavbarPatient.js';
import './About.css';

const PatientProfile = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({});

	const handlerOnCallAboutaUs = async () => {
		try {
			const res = await fetch('/About', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			});

			const data = await res.json();
			console.log(data);
			//Pass All Data to State for access the data
			setUserData(data);
			//console.log(userData.token);
			//ErrorStatusCode....
			const ErrCode = res.status;

			if (ErrCode === 200 || !data) {
				console.log(data);
				console.log(userData.fullname);
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
		handlerOnCallAboutaUs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<NavbarPatient />
			<div className='container mt-5 pb-5 shadow-lg'>
				<div className='card-header bg-success bg-opacity-25 text-primary text-start shadow-lg'>
					<h2>PROFILE</h2>
				</div>
				<div className='container-fluid emp-profile'>
					<form method='post'>
						<div className='row'>
							<div className='col-md-4'>
								<div className='profile-img'>
									<img src={profile} alt='Profile' />
									<div className='file btn btn-lg btn-primary'>
										Change Photo
										<input type='file' name='file' />
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='profile-head'>
									<h5>{userData.fullname}</h5>
									{/* <h6></h6> */}

									<ul className='nav nav-tabs' id='myTab' role='tablist'>
										<li className='nav-item'>
											<a
												className='nav-link active'
												id='home-tab'
												data-toggle='tab'
												href='#home'
												role='tab'
												aria-controls='home'
												aria-selected='true'
											>
												About
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-md-2'>
								{/* <input
									type='submit'
									className='profile-edit-btn'
									name='btnAddMore'
									value='Edit Profile'
								/> */}
							</div>
						</div>

						<div className='row'>
							<div className='col-md-4'>
								<div className='profile-work'>
									<h4>Occupation:</h4>
									<p>{userData.occupation}</p>
								</div>
								<div className='profile-work'>
									<h4>Address:</h4>
									<p>{userData.address}</p>
								</div>
							</div>
							<div className='col-md-8 ps-5 about-info'>
								<div className='tab-content profile-tab' id='myTabContent'>
									<div
										className=''
										id='home'
										role='tabpanel'
										aria-labelledby='home-tab'
									>
										<div className='row'>
											<div className='col-md-6'>
												<label>User Name:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.username}</p>
											</div>

											<div className='col-md-6'>
												<label>Full Name:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.fullname}</p>
											</div>

											<div className='col-md-6'>
												<label>Email:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.email}</p>
											</div>

											<div className='col-md-6'>
												<label>Phone Number:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.phonenumber}</p>
											</div>

											<div className='col-md-6'>
												<label>Birthdate:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.birthdate}</p>
											</div>

											<div className='col-md-6'>
												<label>Gender:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.gender}</p>
											</div>

											<div className='col-md-6'>
												<label>BloodGroup:</label>
											</div>
											<div className='col-md-6'>
												<p>{userData.bloodgroup}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default PatientProfile;
