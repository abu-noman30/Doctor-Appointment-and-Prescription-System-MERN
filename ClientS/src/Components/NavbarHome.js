import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';

const Navbar = () => {
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
								<NavLink className='nav-link active' aria-current='page' to='/'>
									Home
								</NavLink>
							</li>

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

							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle text-black bg-body bg-opacity-50'
									href='e'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Registration
								</a>
								<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
									<li>
										<NavLink className='dropdown-item px-5' to='/Signin'>
											LOGIN
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item px-5' to='/Signup'>
											SIGNUP
										</NavLink>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link active' to='/Scheme'>
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
