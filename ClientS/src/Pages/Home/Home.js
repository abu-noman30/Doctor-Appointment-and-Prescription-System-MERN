import React from 'react';
import doctorimg from '../../Assets/Images/doctor.jpg';
import Footer from '../../Components/Footer.js';
import Navbar from '../../Components/NavbarHome';
import './Home.css';

const Home = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-5 mb-5 shadow-lg'>
				<div className='card-header bg-success bg-opacity-25 text-primary text-start mt-5 shadow-lg'>
					<h2>Home</h2>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<img src={doctorimg} className='img-fluid img' alt='Doctor' />
					</div>

					<div className='col-md-6'>
						<h3 className='mt-5 mb-4'>"WELCOME"</h3>
						<h6 className='text-center'>TO</h6>
						<h2 className='mt-3 text-center'>
							Doctor's Appoinment & Prescription System
						</h2>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Home;
