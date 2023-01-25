import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryData } from './store/search-action';
import Card from './UI/Card';

const App = () => {
	let country = 'China';
	const dispatch = useDispatch();
	const data = dispatch(fetchCountryData(country));
	console.log(data);
	return (
		<Card>
			<h1>HI!!!</h1>
		</Card>
	);
};

export default App;
