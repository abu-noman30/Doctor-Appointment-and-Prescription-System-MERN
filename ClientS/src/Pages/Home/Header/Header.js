import React from 'react';
import BusinessInfo from '../Businessinfo/BusinessInfo';
import HeaderTop from '../HeaderTop/HeaderTop';
import './Header.css';

const Header = () => {
	return (
		<header>
			<HeaderTop></HeaderTop>
			<BusinessInfo></BusinessInfo>
		</header>
	);
};

export default Header;
