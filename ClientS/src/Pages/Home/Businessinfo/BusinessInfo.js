import React from 'react';
import InformationCard from '../InformationCard/InformationCard';

const infosData = [
	{
		title: 'Opening Hours',
		description: 'We are open 7 days',

		background: 'primary'
	},
	{
		title: 'Visit Our Location',
		description: 'Brooklyn, NY 10003 USA',

		background: 'dark'
	},
	{
		title: 'Call us now',
		description: '+15697854124',

		background: 'primary'
	}
];

const BusinessInfo = () => {
	return (
		<section className='d-flex justify-content-center'>
			<div className='row w-75 infos-card'>
				{infosData.map((info) => (
					<InformationCard info={info} key={info.title}></InformationCard>
				))}
			</div>
		</section>
	);
};

export default BusinessInfo;
