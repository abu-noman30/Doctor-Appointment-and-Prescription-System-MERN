import React from 'react';
import { useCookies } from 'react-cookie';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './Sidebar.css';

const Sidebar = () => {
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
				<Link to='/AdminDashboard'>
					<img src={logo} alt='Enzaime logo' />
				</Link>
			</nav>
			<div className='sidebar'>
				<nav className='main-menu mb-5'>
					<ul>
						<li className='mt-5 mb-2'>
							<Link to='/AdminDashboard'>
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
							<Link to='/Patientlist'>
								<AiIcons.AiOutlineUsergroupAdd
									size={30}
									style={{
										marginLeft: '15px',
										marginRight: '15px',
										color: 'Black'
									}}
								/>

								<span className='nav-text'>Patients</span>
							</Link>
						</li>
					</ul>
					<ul className='logout'>
						<li>
							<Link to='/AdminProfile'>
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
	);
};

export default Sidebar;

// ...............................................
