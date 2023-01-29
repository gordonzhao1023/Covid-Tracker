import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryDetail from './CountryDetail';
import Header from './Header';
import { fetchCountryData } from './store/search-action';
import Layout from './UI/Layout';
import Loader from './UI/Loader';
import Modal from './UI/Modal';

const App = () => {
	const isLoading = useSelector((state) => state.country.loading);
	const hasError = useSelector((state) => state.country.error);

	return (
		<Layout>
			{hasError && <Modal />}
			<Header />
			{isLoading ? <Loader /> : <CountryDetail />}
		</Layout>
	);
};

export default App;
