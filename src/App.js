import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryDetail from './CountryDetail';
import Header from './Header';
import { fetchCountryData } from './store/search-action';
import Layout from './UI/Layout';

const App = () => {
	return (
		<Layout>
			<Header />
			<CountryDetail />
		</Layout>
	);
};

export default App;
