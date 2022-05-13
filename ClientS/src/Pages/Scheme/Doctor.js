import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor = ({ DoctorsData }) => {
	//console.log(DoctorsData);
	const navigate = useNavigate();

	return (
		<>
			<section className='main-card--cointainer'>
				{DoctorsData.map((currElem) => {
					const { id, fullname, department, image, time, description } =
						currElem;
					return (
						<div className='container-fluid' key={Math.random()}>
							<div className='card-container'>
								<div className='card'>
									<div className='card-bordy'>
										<span className='card-circle subtle'>{id}</span>
										<span
											className='card-author subtle'
											style={{ color: 'green' }}
										>
											{department}
										</span>
										<span className='card-title'>{fullname}</span>
										<span
											className='card-author subtle'
											style={{ color: 'green', fontSize: '20px' }}
										>
											{time}
										</span>

										<span className='card-description subtel'>
											{description}
										</span>
										<div className='card-read'>Read</div>

										{/* src={curElem.image} */}
										<img src={image} alt='images' className='card-media' />
										<br />
										<span
											className='card-tag subtle'
											onClick={() => navigate('/Appointment')}
										>
											Get Appointment
										</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
				;
			</section>
		</>
	);
};

export default Doctor;
