import Card from './UI/Card';
import ConfirmedCases from './ConfirmCases';
import Death from './Death';
import { useDispatch, useSelector } from 'react-redux';

const CountryDetail = () => {
	const countryName = useSelector((state) => state.country.countryInput);
	return (
		<Card>
			<h2>{countryName}</h2>
			<div>
				<ConfirmedCases />
				<Death />
			</div>
		</Card>
	);
};

export default CountryDetail;
