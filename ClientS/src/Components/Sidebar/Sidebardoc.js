import React from 'react';
import { useCookies } from 'react-cookie';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './Sidebar.css';

const Sidebardoc = () => {
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);

	const handlerOnLogout = () => {
		// console.log('Cookies', cookies['jwtToken']);
		removeCookie('jwtToken');
		navigate('/Signin');
	};
	return (
		<>
			<nav className='container-fluid navbar-light bg-success bg-opacity-10 p-2 position-absolute'>
				<Link to='/Dashboard'>
					<img src={logo} alt='Enzaime logo' />
				</Link>
			</nav>
			<div className='sidebar'>
				<nav className='main-menu mb-5'>
					<ul>
						<li className='mt-5 mb-2'>
							<Link to='/Dashboard'>
								<MdIcons.MdDashboard
									size={30}
									style={{
										marginLeft: '15px',
										marginRight: '15px',
										color: 'Black'
									}}
								/>

								<span className='nav-text'>Dashboard</span>
							</Link>
						</li>

						<li className='has-subnav mb-2'>
							<Link to='/Appointmentlist'>
								<GoIcons.GoCalendar
									size={30}
									style={{
										marginLeft: '15px',
										marginRight: '15px',
										color: 'Black'
									}}
								/>
								<span className='nav-text'>Appointments</span>
							</Link>
						</li>

						<li className='mb-2'>
							<Link to='/Prescription'>
								<FaIcons.FaFilePrescription
									size={30}
									style={{
										marginLeft: '15px',
										marginRight: '15px',
										color: 'Black'
									}}
								/>
								<span className='nav-text'>Create Prescription</span>
							</Link>
						</li>
					</ul>
					<ul className='logout'>
						<li>
							<Link to='/DoctorProfile'>
								<ImIcons.ImProfile
									size={30}
									style={{
										marginLeft: '15px',
										marginRight: '15px',
										color: 'Black'
									}}
								/>
								<span className='nav-text'>About</span>
							</Link>
						</li>

						<li></li>

						<li className='mt-5'>
							<Link to='/Signin'>
								<BiIcons.BiLogOut
									size={30}
									style={{
										marginLeft: '15px',
										marginRight: '15px',
										color: 'Black'
									}}
								/>
								<span className='nav-text' onClick={handlerOnLogout}>
									Logout
								</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
		// <>
		// 	<div>
		// 		<nav className='container-fluid position-absolute navbar-light bg-success bg-opacity-10 p-2'>
		// 			<div className='container'>
		// 				<img src={logo} alt='Enzaime logo' />
		// 			</div>
		// 		</nav>
		// 		<div className='sidebar d-flex flex-column justify-content-between col-md-2 py-5 position-absolute'>
		// 			<ul className='list-unstyled'>
		// 				<li>
		// 					<Link to='/' className='text-white text-decoration-none'>
		// 						{/* <FontAwesomeIcon icon={faUser} />
		// 					<span>{loggedInUser.name}</span> */}
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link to='/' className='text-white text-decoration-none'>
		// 						{/* <FontAwesomeIcon icon={faHome} /> */}
		// 						<span>Home</span>
		// 					</Link>
		// 				</li>

		// 				<li>
		// 					<Link to='/dashboard' className='text-white text-decoration-none'>
		// 						{/* <FontAwesomeIcon icon={faGripHorizontal} /> */}
		// 						<span>Dashboard</span>
		// 					</Link>
		// 				</li>

		// 				{/* {doctor === true && ( */}
		// 				<div>
		// 					<li>
		// 						<Link
		// 							to='/get-appointment'
		// 							className='text-white text-decoration-none'
		// 						>
		// 							{/* <FontAwesomeIcon icon={faCalendar} /> */}
		// 							<span>AppointMent</span>
		// 						</Link>
		// 					</li>

		// 					<li>
		// 						<Link
		// 							to='/allpatient'
		// 							className='text-white text-decoration-none'
		// 						>
		// 							{/* <FontAwesomeIcon icon={faUser} /> */}
		// 							<span>Patients</span>
		// 						</Link>
		// 					</li>

		// 					<li>
		// 						<Link
		// 							to='/addDoctor'
		// 							className='text-white text-decoration-none'
		// 						>
		// 							{/* <FontAwesomeIcon icon={faUserPlus} /> */}
		// 							<span>Add Doctor</span>
		// 						</Link>
		// 					</li>

		// 					<li>
		// 						<Link to='#' className='text-white text-decoration-none'>
		// 							{/* <FontAwesomeIcon icon={faCog} /> */}
		// 							<span>Setting</span>
		// 						</Link>
		// 					</li>
		// 				</div>
		// 				{/* )} */}
		// 			</ul>
		// 			<div className='desh-logout'>
		// 				<Link
		// 					to='/'
		// 					className='text-white text-decoration-none'
		// 					// onClick={signOut}
		// 				>
		// 					{/* <FontAwesomeIcon icon={faSignOutAlt} /> */}
		// 					<span>
		// 						{/* {loading ? ( */}
		// 						{/* <Spinner animation='border' variant='info' />) : ( 'LogOut' */}
		// 						{/* )} */}
		// 					</span>
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
};

export default Sidebardoc;

// ...............................................
