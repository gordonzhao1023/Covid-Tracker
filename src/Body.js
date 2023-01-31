import Card from './UI/Card';
import Loader from './UI/Loader';
import { useSelector } from 'react-redux';
import CountryDetail from './CountryDetail';

const Body = () => {
	const isLoading = useSelector((state) => state.country.loading);

	return <Card>{isLoading ? <Loader /> : <CountryDetail />}</Card>;
};

export default Body;
