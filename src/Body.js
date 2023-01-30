import Card from './UI/Card';
import ConfirmedCases from './ConfirmCases';
import Death from './Death';
import Loader from './UI/Loader';
import { useDispatch, useSelector } from 'react-redux';

const Body = () => {
	const countryName = useSelector((state) => state.country.countryInput);
	const isLoading = useSelector((state) => state.country.loading);

	const content = isLoading ? (
		<Loader />
	) : (
		<div>
			<h2>{countryName}</h2>
			<div>
				<ConfirmedCases />
				<Death />
			</div>
		</div>
	);

	return <Card>{content}</Card>;
};

export default Body;
