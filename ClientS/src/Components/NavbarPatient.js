import React from 'react';
import { useCookies } from 'react-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
const Navbar = () => {
	const navigate = useNavigate();
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);

	const handlerOnLogout = () => {
		// console.log('Cookies', cookies['jwtToken']);
		removeCookie('jwtToken');
		navigate('/Signin');
	};

	// const handlerOnLogout = async () => {
	// 	const res = await fetch('/Logout', {
	// 		method: 'GET',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		credentials: 'include'
	// 	});
	// 	const data = await res.json();
	// 	console.log(data);
	// 	//ErrorCode...
	// 	const ErrCode = res.status;
	// 	console.log(ErrCode);

	// 	if (ErrCode !== 200 || !data) {
	// 		const error = new Error(res.error);
	// 		throw error;
	// 	} else {
	// 		alert('LOGOUT SUCCESSFully..........');
	// 		navigate('/Signin', {
	// 			replace: true
	// 		});
	// 	}
	// };

	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-success bg-opacity-10 p-2 text-dark'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='/'>
						<img src={logo} alt='Enzaime logo' />
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav nav-tabs mb-2 mb-lg-0 ms-auto'>
							<li className='nav-item'>
								<NavLink className='nav-link active' to='/PatientProfile'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link active' to='/Appointment'>
									Appoinment
								</NavLink>
							</li>
							<li>
								<input
									type='button'
									className='nav-item p-1 bg-primary text-white color-white'
									value='LOGOUT'
									onClick={handlerOnLogout}
								/>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link active' to='/PatientScheme'>
									Scheme
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

// import Style from './Style.css'--->import css component

// <NavLink className={(navStyle)=>(navStyle.isActive ? Style.classname :anotherclassname)}' to='/About'>
// About
// </NavLink>
