import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import Sidebardoc from '../../../Components/Sidebar/Sidebardoc';
import PDFReader from '../PrescriptionPDF/PDFReader';

const PDFPrinter = () => {
	const [presData, setPresData] = useState([]);

	const getData = async () => {
		try {
			const res = await fetch('/GetPrescriptiondata', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			});

			const data = await res.json();
			console.log(data);
			//Pass All Data to State for access the data
			setPresData(data);
			//console.log(userData.token);
			//ErrorStatusCode....
			const ErrCode = res.status;

			if (ErrCode === 200 || !data) {
				const error = new Error(res.error);
				console.log(error);
			} else {
				console.log('Data GEt Successfully');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	// ----------GET Doctor Data--------------
	const [userData, setUserData] = useState('');

	const getDoctor = async () => {
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
			setUserData(data.fullname);
			//console.log(userData.token);
			//ErrorStatusCode....
			const ErrCode = res.status;

			if (!ErrCode === 200 || !data) {
				const error = new Error(res.error);
				console.log(error);
			} else {
				console.log(data.fullname);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getDoctor();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='me-5 position-fixed'>
				<Sidebardoc />
			</div>
			<div
				style={{
					paddingTop: '4rem',
					marginLeft: '1rem'
				}}
			></div>
			<div className='body-margin ms-5'>
				<div className='container ms -5 mb-5 shadow-lg'>
					<div className='card-header bg-success bg-opacity-25 text-primary text-start shadow-lg'>
						<h2>PRINT PRESCRIPTION(PDF)</h2>
					</div>

					<div className='panel-body'>
						<div className='portlet-body form'>
							<div className='text-center mt-5'>
								<PDFViewer>
									<PDFReader presData={presData} userData={userData} />
								</PDFViewer>
							</div>
						</div>
						<div className='text-center'>
							<PDFDownloadLink
								document={<PDFReader presData={presData} userData={userData} />}
								fileName='Prescription'
							>
								{({ loading }) =>
									loading ? (
										<button className='btn btn-primary'>
											Loading Document.....
										</button>
									) : (
										<button className='btn btn-primary'>Download</button>
									)
								}
							</PDFDownloadLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PDFPrinter;
