import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DoctorList from './Doctor/DoctorList';
const AdminDashboard = () => {
	return (
		<>
			<div className='me-5 position-fixed mb-5'>
				<Sidebar />
			</div>
			<div
				style={{
					paddingTop: '8rem',
					marginLeft: '1rem'
				}}
			>
				<div className='ms-5'>
					<div className='container shadow-lg'>
						<div
							className='card-header bg-success bg-opacity-25 text-primary text-start shadow-lg'
							id='C-header'
						>
							<h3>Dashboard</h3>
						</div>
						<div className='row'>
							<Card
								bg='info'
								text='white'
								style={{
									width: '11rem',
									height: '12rem',
									marginTop: '1rem',
									marginLeft: '1rem'
								}}
								className='mb-2'
							>
								<Card.Header>Patient</Card.Header>
								<Card.Body>
									<NavLink
										to='/PatientList'
										style={{ color: 'Black', fontSize: '100px' }}
									>
										3
									</NavLink>
								</Card.Body>
							</Card>
							<Card
								bg='danger'
								text='white'
								style={{
									width: '11rem',
									height: '12rem',
									marginTop: '1rem',
									marginLeft: '1rem'
								}}
								className='mb-2'
							>
								<Card.Header>Doctor</Card.Header>
								<Card.Body>
									<NavLink
										to='/AppointmenttList'
										style={{ color: 'Black', fontSize: '100px' }}
									>
										3
									</NavLink>
								</Card.Body>
							</Card>
							<Card
								bg='success'
								text='white'
								style={{
									width: '11rem',
									height: '12rem',
									marginTop: '1rem',
									marginLeft: '1rem'
								}}
								className=''
							>
								<Card.Header>Appointment</Card.Header>
								<Card.Body>
									<NavLink
										to='/AppointmenttList'
										style={{ color: 'Black', fontSize: '100px' }}
									>
										3
									</NavLink>
								</Card.Body>
							</Card>
						</div>
						<DoctorList />
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDashboard;
