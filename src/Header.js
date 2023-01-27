// 1) collect userinput with useRef
// 2) setCountryValue to the ref value
// 3) form on submit triggers function

import React, { useRef } from 'react';
import { fetchCountryData } from './store/search-action';
import { useDispatch, useSelector } from 'react-redux';
import { createKeywordTypeNode } from 'typescript';

const Header = () => {
	const dispatch = useDispatch();
	const countryRef = useRef('');
	const confirmed = useSelector(
		(state) => state.country.countryData.confirmCase
	);

	const fetchCountryDataHandler = (e) => {
		e.preventDefault();
		const currentCountry = countryRef.current.value;
		dispatch(fetchCountryData(currentCountry));
		console.log(confirmed);
	};

	return (
		<React.Fragment>
			<h1>Country</h1>
			<form onSubmit={fetchCountryDataHandler}>
				<input
					type='search'
					id='country-search'
					placeholder='Search Country Names'
					ref={countryRef}
				/>
				<button>SEARCH</button>
			</form>
		</React.Fragment>
	);
};

export default Header;
