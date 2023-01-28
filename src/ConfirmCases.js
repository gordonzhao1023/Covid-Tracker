import React from 'react';
import { useSelector } from 'react-redux';
import confirmImage from './SVGs/confirmed.svg';
import classes from './Svg.module.css';

const ConfirmedCases = () => {
	const confirmedNumber = useSelector(
		(state) => state.country.countryData.confirmCases
	);

	return (
		<React.Fragment>
			<img src={confirmImage} alt='ConfirmedCases' className={classes.svg} />
			<h2>
				CONFIRMED:
				<span>{confirmedNumber}</span>
			</h2>
		</React.Fragment>
	);
};

export default ConfirmedCases;
