import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
// import { fetchCountryData } from './store/search-action';
import Layout from './UI/Layout';
import Modal from './UI/Modal';
import Body from './Body.js';

const App = () => {
	// const isLoading = useSelector((state) => state.country.loading);
	const hasError = useSelector((state) => state.country.error);

	return (
		<Layout>
			{hasError && <Modal />}
			<Header />
			<Body />
			{/* {isLoading ? <Loader /> : <CountryDetail />} */}
		</Layout>
	);
};

export default App;
