import moment from 'moment';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-icons/ai';
import Sidebar from '../../Components/Sidebar/Sidebar';

const PatientList = () => {
	const [patientdata, SetPatientdata] = useState([]);

	const getData = async () => {
		const res = await fetch('/GetPatientdata', {
			method: 'Get',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		//console.log(res);
		const data = await res.json();
		console.log(data);
		SetPatientdata(data);
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

	const handlerOnDelete = async (id) => {
		const res = await fetch(`/Delete/${id}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		console.log(data);
		if (res.status === 422 || !data) {
			console.log('Error');
		} else {
			console.log('User Deleted Successfully');
			getData();
		}
	};

	return (
		<div>
			<div className='me-5 position-fixed mb-5'>
				<Sidebar />
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
							<h2>PATIENTS</h2>
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
											<th>Full Name</th>
											<th>Phone Number</th>
											<th>Email</th>
											<th>Blood Group</th>
											<th>Birth date</th>
											<th>Gender</th>
											<th>Action</th>
										</tr>
									</thead>
									{/*...#Start.... Map() for list item with Ternary(Condition ? Print : " ") ...*/}
									<tbody>
										{patientdata.map((item) =>
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
													<td>{item.fullname}</td>
													<td>{item.phonenumber}</td>
													<td>{item.email}</td>
													<td>{item.bloodgroup}</td>
													<td>
														{moment(item.birthdate).utc().format('YYYY-MM-DD')}
													</td>
													<td>{item.gender}</td>
													<td>
														<button
															type='button'
															className='btn btn-primary'
															onClick={() => {
																handlerOnDelete(item._id);
															}}
														>
															<Icon.AiFillDelete />
														</button>
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

export default PatientList;
