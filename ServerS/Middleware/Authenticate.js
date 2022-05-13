const jwt = require('jsonwebtoken');
const Patient = require('../Models/patientSchema.js');

//Middleware connection...
// const getTokenFromCookie = (cookie) => {
// 	const cookieArr = cookie.split('=');
// 	const tokenLabelIndex = cookieArr.indexOf('jwtToken');
// 	if (tokenLabelIndex || tokenLabelIndex === 0) {
// 		return cookieArr[tokenLabelIndex + 1];
// 	}
// 	return null;
// };
const Authenticate = async (req, res, next) => {
	try {
		//console.log(req.headers);
		//const token = getTokenFromCookie(req.headers.cookie);
		const token = req.cookies.jwtToken;
		console.log(req.cookies.jwtToken);
		const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
		const verifyRootUser = await Patient.findOne({ _id: verifyToken._id, 'tokens.token': token });

		if (!verifyRootUser) {
			console.log('User not Found');
		}
		req.token = token;
		req.verifyRootUser = verifyRootUser;
		req.userID = verifyRootUser._id;

		next();
	} catch (err) {
		console.log(err);
		return res.status(401).send('Unauthorized: No token Provided');
	}
};

module.exports = Authenticate;
