import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryData } from './store/search-action';

const App = () => {
	let country = 'China';
	const dispatch = useDispatch();
	const data = dispatch(fetchCountryData(country));
	console.log(data);
	return (
		<React.Fragment>
			<h1>HI!!!!</h1>
		</React.Fragment>
	);
};

export default App;
