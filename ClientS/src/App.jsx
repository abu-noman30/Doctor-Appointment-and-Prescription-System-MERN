import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Sidebardoc from './Components/Sidebar/Sidebardoc.js';
import AdminProfile from './Pages/About/AdminProfile.js';
import DoctorProfile from './Pages/About/DoctorProfile.js';
import PatientProfile from './Pages/About/PatientProfile.js';
import Appointment from './Pages/Appointment/Appointment.js';
import Appointmentlist from './Pages/Appointment/Appointmentlist.js';
import AdminDashboard from './Pages/Dashboards/AdminDashboard.js';
import Dashboard from './Pages/Dashboards/Dashboard.js';
import DoctorList from './Pages/Dashboards/Doctor/DoctorList.js';
import Error from './Pages/Error/Error.js';
import Home from './Pages/Home/Home.js';
//import Home from './Pages/Home/Home/Home.js';
import Signin from './Pages/Login/Signin.js';
import PatientList from './Pages/Patient/PatientList.js';
import Prescription from './Pages/Prescription/CreatePrescription/Prescription.js';
import PDF from './Pages/Prescription/PrescriptionPDF/PDF.js';
import PDFPrinter from './Pages/Prescription/PrescriptionPDF/PDFPrinter.js';
import PDFReader from './Pages/Prescription/PrescriptionPDF/PDFReader.js';
import PatientScheme from './Pages/Scheme/PatientScheme.js';
import Scheme from './Pages/Scheme/Scheme.js';
import Signup from './Pages/Signup/Signup.js';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/Home' />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/PatientProfile' element={<PatientProfile />} />
				<Route path='/DoctorProfile' element={<DoctorProfile />} />
				<Route path='/AdminProfile' element={<AdminProfile />} />

				<Route path='/Appointment' element={<Appointment />} />
				<Route path='/Signin/*' element={<Signin />}>
					{/*<Route path='/AdminDashboard' element={<AdminDashboard />} />
					 <Route path='/Signin/AdminDashboard' element={<AdminDashboard />} /> */}
				</Route>
				<Route path='/Signup' element={<Signup />} />
				<Route path='/Scheme' element={<Scheme />} />
				<Route path='/PatientScheme' element={<PatientScheme />} />

				<Route path='*' element={<Error />} />

				<Route path='/Sidebar' element={<Sidebar />} />
				<Route path='/Sidebardoc' element={<Sidebardoc />} />
				<Route path='/AdminDashboard' element={<AdminDashboard />} />
				<Route path='/Dashboard' element={<Dashboard />} />
				<Route path='/Prescription' element={<Prescription />} />
				<Route path='/PatientList' element={<PatientList />} />
				<Route path='/DoctorList' element={<DoctorList />} />
				<Route path='/PDFPrinter' element={<PDFPrinter />} />
				<Route path='/PDFReader' element={<PDFReader />} />
				<Route path='/PDF' element={<PDF />} />

				<Route path='/Appointmentlist' element={<Appointmentlist />} />
			</Routes>
		</>
	);
}

export default App;
