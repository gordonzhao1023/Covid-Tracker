import Card from './UI/Card';
import ConfirmedCases from './ConfirmCases';
import Death from './Death';
import Loader from './UI/Loader';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CountryDetail.module.css';

const CountryDetail = () => {
	const countryName = useSelector((state) => state.country.countryInput);

	return (
		<div className={classes.detail}>
			<h2>{countryName}</h2>
			<div>
				<ConfirmedCases />
				<Death />
			</div>
		</div>
	);
};

export default CountryDetail;
