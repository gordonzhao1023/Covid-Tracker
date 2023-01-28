import React from 'react';
import Deathimg from './SVGs/death-grim-halloween-svgrepo-com.svg';
import { useSelector } from 'react-redux';
import classes from './Svg.module.css';

const Death = () => {
	const deathNumber = useSelector(
		(state) => state.country.countryData.deathCases
	);
	return (
		<React.Fragment>
			{/* <object type='image/svg+xml' data='image.svg'>
				<img src='../' />
			</object> */}
			<img src={Deathimg} alt='Death' className={classes.svg} />
			<h2>
				DEATH: <span>{deathNumber}</span>
			</h2>
		</React.Fragment>
	);
};

export default Death;
