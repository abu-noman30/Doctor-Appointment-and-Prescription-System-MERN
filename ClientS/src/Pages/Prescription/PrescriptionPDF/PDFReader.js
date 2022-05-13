import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
	View
} from '@react-pdf/renderer';
import React from 'react';
import logo from '../../../Assets/Images/logo.png';

//Create styles
const styles = StyleSheet.create({
	page: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
		backgroundColor: '#f8f9fb',
		color: '#79787c'
	},
	section: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15
	},
	head_info: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignContent: 'flex-end',
		alignItems: 'flex-end',
		fontSize: 7,
		textAlign: 'left'
	},
	logo: {
		width: 100
	},
	body: {
		width: '100%',
		marginTop: 32,
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 8
	},
	info_body: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	linebreak: {
		width: '100%',
		height: 1,
		backgroundColor: '#e7eaf0',
		marginTop: 6,
		marginBottom: 6,
		borderRadius: 999
	},
	body_left: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	body_right: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	info_left: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	info_right: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	body_wrapper: {
		display: 'flex',
		flexDirection: 'column'
	},
	items_body: {
		width: '100%',
		marginTop: 32,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		borderRadius: 8,
		padding: 12
	},
	tab_title: {
		color: '#36424d',
		fontWeight: 'bold',
		fontSize: 10
	},
	info_title: {
		color: '#36424d',
		fontWeight: 'bold',
		fontSize: 9
	},
	category_title: {
		color: '#36424d',
		fontWeight: 700,
		fontSize: 20
	},
	item_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		marginBottom: 3
	},
	item_title: {
		fontSize: 10,
		fontWeight: 600,
		marginRight: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '2'
	},
	item_item: {
		fontSize: 7.5,
		fontWeight: 500,
		color: '#36424d',
		paddingTop: 2,
		marginBottom: 2
	},
	item_title_list: {
		fontSize: 6,
		fontWeight: 500,
		marginRight: 6,
		textTransform: 'uppercase'
	},
	item_item_list: {
		fontSize: 7,
		fontWeight: 500,
		color: '#36424d'
	},
	box_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 12
	},
	single_box: {
		width: '50%'
	},
	full_item: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: -8
	},
	six: {
		width: '5%',
		height: 'auto'
	},
	more_six: {
		height: 'auto',
		width: '80%'
	},
	six_title: {
		width: '5%',
		height: 'auto',
		fontSize: 6.5,
		fontWeight: 600,
		textTransform: 'uppercase'
	},
	more_six_title: {
		height: 'auto',
		width: '80%',
		fontSize: 6.5,
		fontWeight: 600,
		textTransform: 'uppercase'
	}
});

const PDFReader = ({ presData, userData }) => {
	console.log('pdf presData =', presData);
	console.log('pdf userData =', userData);

	return (
		<Document>
			{presData
				? presData.map((item) => (
						<Page size='A4' style={styles.page}>
							<View style={styles.section}>
								<Image style={styles.logo} src={logo} />

								<View style={styles.head_info}>
									<Text style={styles.info_title}>Enzaime Limited</Text>
									<Text style={styles.item_item}>info@enzaime.com</Text>
									<Text style={styles.item_item}>www.enzaime.com</Text>
									<Text style={styles.item_item}>Phone: 029352111</Text>
								</View>
							</View>

							<View style={styles.body}>
								<View
									style={{
										width: '100%',
										display: 'flex',
										justifyContent: 'space-between',
										marginBottom: 20
									}}
								>
									{/* {userData
										? userData.map((items) => (
												<Text style={styles.category_title}>
													{items.fullname}
												</Text>
										  ))
										: ''} */}
									<Text style={styles.category_title}>{userData}</Text>

									<Text style={styles.category_title}>
										Date: {new Date().toDateString()}
									</Text>
								</View>
								<View style={styles.linebreak} />
								<View style={styles.box_wrapper}>
									<View style={{ marginRight: 180 }}>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Patient Name: {item.fullname}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Phone Number: {item.phonenumber}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Birthdate: {item.birthdate}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>Age: {item.age} </Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>Gender: Male </Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Blood Group: {item.bloodgroup}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Patient Wight:{item.patientweight}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Patient BP: {item.patientBP}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Body Temperature: {item.patientTemp}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Illness History: {item.illnesshistory}
											</Text>
										</View>
									</View>
									<View style={{ textAlign: 'left' }}>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Medicine Name: {item.medicineName}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Medicine Type: {item.medicineType}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Medicine mg:{item.medicineMG}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Medicine Day: {item.medicineday}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Medicine Dose: {item.medicinedose}
											</Text>
										</View>
										<View
											style={(styles.item_wrapper, { marginBottom: '20px' })}
										>
											<Text style={styles.item_title}>
												Comments: {item.comments}
											</Text>
										</View>
										<View style={styles.linebreak} />
										<View style={styles.item_wrapper}>
											<Text style={styles.item_item}>
												Overall Comments: {item.overallComments}
											</Text>
										</View>
										<View style={styles.linebreak} />

										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Test Name: {item.testname}
											</Text>
										</View>
										<View style={styles.item_wrapper}>
											<Text style={styles.item_title}>
												Test Description: {item.testdescription}
											</Text>
										</View>
									</View>
								</View>
							</View>

							<View style={styles.body}>
								<Text style={styles.tab_title}>Advice: {item.advice}</Text>
								<View style={styles.linebreak} />
							</View>
						</Page>
				  ))
				: ''}
		</Document>
	);
};

export default PDFReader;
