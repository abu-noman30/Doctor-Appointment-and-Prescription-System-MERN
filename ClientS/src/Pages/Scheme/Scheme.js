import React, { useState } from 'react';
import NavbarHome from '../../Components/NavbarHome';
import Doctors from './DocApi';
import Doctor from './Doctor';
import './Scheme.css';

const Scheme = () => {
	const [DoctorsData] = useState(Doctors);

	return (
		<>
			<div>
				<NavbarHome />
			</div>
			<Doctor DoctorsData={DoctorsData} />
		</>
	);
};

export default Scheme;
