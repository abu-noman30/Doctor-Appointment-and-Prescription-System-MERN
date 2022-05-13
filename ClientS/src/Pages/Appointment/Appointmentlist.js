import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Sidebardoc from '../../Components/Sidebar/Sidebardoc.js';

const AppointmentList = () => {
	const [appoientmentdata, setAppoientmentdata] = useState([]);
	const [visit, setVisit] = useState([]);

	const getData = async () => {
		const res = await fetch('/GetAppoientmentdata', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();
		console.log(data);
		//Pass All Data to State for access the data
		setAppoientmentdata(data);
		console.log('Doctor:', data[0].isDoctor);

		//ErrorCodeAccess--->res.status
		const ErrCode = res.status;

		if (ErrCode === 404 || !data) {
			console.log('Data Not Found.....');
		} else {
			console.log('Data Gated Successfully');
		}
	};

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div className='me-5 position-fixed mb-5'>
				<Sidebardoc />
			</div>
			<div
				style={{
					paddingTop: '1rem',
					paddingBottom: '7rem',
					marginLeft: '1rem'
				}}
			>
				<div className='ms-5'>
					<div className='container mt-5 mb-5 shadow-lg'>
						<div className='card-header bg-success bg-opacity-25 text-primary text-start shadow-lg'>
							<h2>APPOIENTMENTS</h2>
						</div>

						<div className='panel-body'>
							<div className='table-responsive'>
								<div className='row mb-2'>
									<div className='col-sm-4'>
										<div className='mt-4' id='patient_list_length'>
											<label>
												<select
													name='patient_list_length'
													aria-controls='patient_list'
													className='form-control input-sm'
												>
													<option value={5}>05</option>
													<option value={10}>10</option>
												</select>
											</label>
										</div>
									</div>
									<div className='col-sm-4 text-center'></div>
									<div className='col-sm-4'>
										<div id='patient_list_filter' className='mt-4'>
											<label>
												<input
													type='search'
													className='form-control input-sm'
													placeholder='Search'
													aria-controls='patient_list'
												/>
											</label>
										</div>
									</div>
								</div>
								<table
									className='table table-responsive table-bordered table-hover'
									id='patient_list'
									role='grid'
								>
									<thead className='table table-striped'>
										<tr className='text-center'>
											<th>Picture</th>
											<th colSpan={2}>Full Name</th>
											<th>Phone Number</th>
											<th colSpan={5}>Illness History</th>
											<th>Date</th>
											<th>Time</th>
											<th>Birth date</th>
											<th>Gender</th>
											<th>Action</th>
										</tr>
									</thead>
									{/*...#Start.... Map() for list item with Ternary(Condition ? Print : " ") ...*/}
									<tbody>
										{appoientmentdata.map((item) =>
											item.isDoctor === false ? (
												<tr className='gradeX odd' key={Math.random()}>
													<td className='sorting_1'>
														<div className='profile-userpic'>
															<img
																width={50}
																src='Images/patient.png'
																className='img-responsive'
																alt='Img'
															/>
														</div>
													</td>

													<td colSpan={2}>{item.fullname}</td>
													<td>{item.phonenumber}</td>
													{/*...#Start.... Array in Object using Map() for fetch subItem list ... */}
													{item.appointments.map((subItem) => (
														<>
															<td colSpan={5}>{subItem.message}</td>
															<td>
																{moment(subItem.date)
																	.utc()
																	.format('YYYY-MM-DD')}{' '}
															</td>
															<td>{subItem.time}</td>
														</>
													))}
													{/* ...subItem Map()...#End... */}

													<td>
														{moment(item.birthdate).utc().format('YYYY-MM-DD')}
													</td>
													<td>{item.gender}</td>
													<td>
														<div className='btn-group'>
															<select
																className='custom-select btn btn-primary btn-sm dropdown-toggle'
																id='inputGroupSelect01'
																name='visitopt'
																value={visit.visitopt}
																onChange={(e) => setVisit(e.target.value)}
															>
																<option value=''>Not Visited</option>
																<option value=''>Visited</option>
															</select>
														</div>
													</td>
												</tr>
											) : (
												''
											)
										)}
									</tbody>
									{/* ...Map()...#End... */}
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentList;
