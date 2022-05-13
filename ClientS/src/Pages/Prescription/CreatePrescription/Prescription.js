import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebardoc from '../../../Components/Sidebar/Sidebardoc.js';

const CreatePrescription = () => {
	const navigate = useNavigate();
	const iniState = {
		fullname: '',
		phonenumber: '',
		birthdate: '',
		age: '',
		gender: '',
		bloodgroup: '',
		patientweight: '',
		patientBP: '',
		patientTemp: '',
		illnesshistory: '',
		medicineType: '',
		medicineName: '',
		medicineMG: '',
		medicineday: '',
		medicinedose: '',
		comments: '',
		overallComments: '',
		testname: '',
		testdescription: '',
		advice: ''
	};

	const [prescription, setPrescription] = useState(iniState);

	const handlerOnchange = (e) => {
		// const { tgname, tgvalue } = e.target;
		// setPatient({ ...patient, [tgname.name]: tgvalue.value });

		let tgname, tgvalue;
		tgname = e.target.name;
		tgvalue = e.target.value;
		setPrescription({ ...prescription, [tgname]: tgvalue });
	};
	const handlerOnsubmitReset = () => {
		setPrescription(iniState);
	};

	const handlerOnsubmitPostData = async (e) => {
		//e.preventDefault();
		const postData = {
			fullname: prescription.fullname,
			phonenumber: prescription.phonenumber,
			birthdate: prescription.birthdate,
			age: prescription.age,
			gender: prescription.gender,
			bloodgroup: prescription.bloodgroup,
			patientweight: prescription.patientweight,
			patientBP: prescription.patientBP,
			patientTemp: prescription.patientTemp,
			illnesshistory: prescription.illnesshistory,
			medicineName: prescription.medicineName,
			medicineType: prescription.medicineType,
			medicineMG: prescription.medicineMG,
			medicineday: prescription.medicineday,
			medicinedose: prescription.medicinedose,
			comments: prescription.comments,
			overallComments: prescription.overallComments,
			testname: prescription.testname,
			testdescription: prescription.testdescription,
			advice: prescription.advice
		};

		const res = await fetch('/Prescription', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData)
		});
		//console.log(res);
		const data = await res.json();
		//console.log(data);
		//ErrorCodeAccess--->res.status
		const ErrCode = res.status;

		if (ErrCode === 422 || !data) {
			//console.log(ErrCode);
			console.log(data);
			window.alert(data);
		} else {
			console.log(data);
			alert('Prescription Generated SUCCESSFULLY....');
			navigate('/PDFPrinter', {
				replace: true
			});
		}
	};

	// ----------GET Doctor Data--------------
	const [userData, setUserData] = useState({});

	const handlerOnCallDoctorName = async () => {
		try {
			const res = await fetch('/About', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
				//credentials: 'include'
			});

			const data = await res.json();
			console.log(data);
			//Pass All Data to State for access the data
			setUserData(data);
			//console.log(userData.token);
			//ErrorStatusCode....
			const ErrCode = res.status;

			if (ErrCode === 200 || !data) {
				console.log(data);
				console.log(userData.fullname);
			} else if (!ErrCode === 200) {
				const error = new Error(res.error);
				console.log(error);
			} else {
				console.log(data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		handlerOnCallDoctorName();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='me-5 position-fixed mb-5'>
				<Sidebardoc />
			</div>
			<div
				style={{
					paddingTop: '4rem',
					paddingBottom: '4rem',
					marginLeft: '1rem'
				}}
			>
				<div className='body-margin ms-5'>
					<div className='container ms -5 mb-5 shadow-lg'>
						<div className='card-header bg-success bg-opacity-25 text-primary text-start shadow-lg'>
							<h2>PRESCRIPTION</h2>
						</div>

						<div className='panel-body'>
							<div className='portlet-body form'>
								<div className='portlet-title'>
									<div className='row'>
										<div className='portlet-title'>
											<div className='row'>
												<div className='col-sm-8 text-start'>
													<h4>{userData.fullname}</h4>
													{/* {Doctors Name} */}
												</div>
												<div className='col-sm-4'>
													<h6>{new Date().toDateString()}</h6>
												</div>
											</div>

											<hr />

											<div className='had'>
												<input
													type='text'
													name='fullname'
													autoComplete='off'
													className='form-control'
													value={prescription.fullname}
													onChange={handlerOnchange}
													placeholder='Patient Name'
													required
												/>

												<input
													type='text'
													name='phonenumber'
													value={prescription.phonenumber}
													autoComplete='off'
													className='form-control'
													onChange={handlerOnchange}
													placeholder='Phone Number'
													required
												/>

												<div className='form-control text-start'>
													BirthDate:
													<input
														type='date'
														className='text-start ms-5'
														id='birthdate'
														name='birthdate'
														value={prescription.birthdate}
														onChange={handlerOnchange}
														autoComplete='off'
													/>
												</div>
												<div className=''>
													<input
														type='text'
														autoComplete='off'
														name='age'
														id='age'
														value={prescription.age}
														onChange={handlerOnchange}
														className='form-control'
														placeholder='Age'
													/>
												</div>
												<div className=''>
													<input
														type='text'
														autoComplete='off'
														name='gender'
														id='gender'
														value={prescription.gender}
														onChange={handlerOnchange}
														className='form-control'
														placeholder='Gender'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>{' '}
							<hr />
							<div className='portlet-title'>
								<div className='form-group '>
									<input
										type='text'
										className='form-control'
										value={prescription.bloodgroup}
										onChange={handlerOnchange}
										placeholder='Blood Group'
										name='bloodgroup'
									/>

									<input
										type='text'
										className='form-control'
										value={prescription.patientweight}
										onChange={handlerOnchange}
										placeholder='Patient Weight'
										name='patientweight'
									/>

									<input
										type='text'
										className='form-control'
										value={prescription.patientBP}
										onChange={handlerOnchange}
										placeholder='Patient BP'
										name='patientBP'
									/>

									<input
										type='text'
										className='form-control'
										value={prescription.patientTemp}
										onChange={handlerOnchange}
										placeholder='Temperature'
										name='patientTemp'
									/>
								</div>
							</div>
							<hr />
							<div className='portlet-title'>
								<div className='form-group '>
									<div className=''>
										<input
											type='text'
											className='form-control'
											value={prescription.illnesshistory}
											onChange={handlerOnchange}
											placeholder='Patient Illness History'
											name='illnesshistory'
										/>
									</div>
								</div>
							</div>
							<hr />
						</div>
						<div className='portlet-title'>
							<div className='row'>
								{/* ------------------start Medicine area-----  */}

								<div>
									<table className='table table-bordered table-hover'>
										<thead>
											<tr>
												<td className='d-grid gap-2 col-6 mx-auto'>
													<span className=' p-2 bg- bg-primary btn-outline-dark bg-opacity-75 text-white'>
														Medicine
													</span>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className='field_wrapper'>
														<div className='form-group '>
															<div className>
																<input
																	type='text'
																	className='mdcn_name form-control'
																	name='medicineName'
																	value={prescription.medicineName}
																	onChange={handlerOnchange}
																	autoComplete='off'
																	placeholder='Medicine Name'
																/>
																<div id='suggesstion-box' />
															</div>
															<div className>
																<input
																	type='text'
																	className='form-control'
																	value={prescription.medicineType}
																	onChange={handlerOnchange}
																	name='medicineType'
																	placeholder='Type'
																/>
															</div>

															<div className>
																<input
																	type='text'
																	className='form-control'
																	value={prescription.medicineMG}
																	onChange={handlerOnchange}
																	placeholder='Mg/Ml'
																	name='medicineMG'
																/>
															</div>
															<div className>
																<input
																	type='text'
																	className='form-control'
																	value={prescription.medicinedose}
																	onChange={handlerOnchange}
																	placeholder='Dose'
																	name='medicinedose'
																/>
															</div>
															<div className>
																<input
																	type='text'
																	className='form-control'
																	value={prescription.medicineday}
																	onChange={handlerOnchange}
																	placeholder='Day'
																	name='medicineday'
																/>
															</div>
															<div className>
																<input
																	type='text'
																	className='form-control'
																	value={prescription.comments}
																	onChange={handlerOnchange}
																	placeholder='Comments'
																	name='comments'
																/>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td colSpan={6}>
													<div className='form-group'>
														<textarea
															placeholder='Overall Comment'
															name='overallComments'
															className='form-control'
															value={prescription.overallComments}
															onChange={handlerOnchange}
															rows={2}
															defaultValue={''}
														/>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* End Medicine */}

								{/* start Test area  */}
								<div className='col-sm-6'>
									<table className='table table-bordered table-hover'>
										<thead>
											<tr>
												<td className='d-grid gap-2 col-6 mx-auto'>
													<span className=' p-2 bg- bg-primary btn-outline-dark bg-opacity-75 text-white'>
														Test
													</span>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className='field_wrapper1'>
														<div id='count_test1'>
															<div className='form-group '>
																<input
																	placeholder='Test Name'
																	className='test_name form-control'
																	value={prescription.testname}
																	onChange={handlerOnchange}
																	name='testname'
																	autoComplete='off'
																/>

																<input
																	placeholder='Description'
																	name='testdescription'
																	className='form-control'
																	value={prescription.testdescription}
																	onChange={handlerOnchange}
																/>
															</div>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* ..End Test */}
								{/* Advice area  */}
								<div className='col-sm-6'>
									<table className='table table-bordered table-hover'>
										<thead>
											<tr>
												<td className='d-grid gap-2 col-6 mx-auto'>
													<span className=' p-2 bg- bg-primary btn-outline-dark bg-opacity-75 text-white'>
														Advice
													</span>
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className='field_wrapper2'>
														<div id='count_advice1'>
															<div className='form-group '>
																<div className='col-md-10'>
																	<input
																		placeholder='Advice '
																		className='advice_name form-control mb-4'
																		name='advice'
																		value={prescription.advice}
																		onChange={handlerOnchange}
																		autoComplete='off'
																	/>
																</div>
															</div>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* End Advice */}
							</div>
							<div className='form-group row'>
								<div className='mb-2'>
									<button
										type='reset'
										className='btn btn-danger'
										onClick={handlerOnsubmitReset}
									>
										Reset
									</button>
									<button
										type='button'
										onClick={handlerOnsubmitPostData}
										className='btn btn-success'
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreatePrescription;
