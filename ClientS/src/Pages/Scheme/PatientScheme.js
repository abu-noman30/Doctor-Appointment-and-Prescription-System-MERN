import React, { useState } from 'react';
import NavbarPatient from '../../Components/NavbarPatient';
import Doctors from './DocApi';
import Doctor from './Doctor';
import './Scheme.css';

const Scheme = () => {
	const [DoctorsData] = useState(Doctors);

	return (
		<>
			<div>
				<NavbarPatient />
			</div>
			<Doctor DoctorsData={DoctorsData} />
		</>
	);
};

export default Scheme;
