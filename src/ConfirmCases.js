import { useSelector } from 'react-redux';

const ConfirmedCases = () => {
	const confirmedNumber = useSelector(
		(state) => state.country.countryData.confirmCases
	);

	return (
		<div>
			<h4>CONFIRMED</h4>
			<p>{confirmedNumber}</p>
		</div>
	);
};

export default ConfirmedCases;
