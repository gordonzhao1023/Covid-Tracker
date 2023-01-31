// 1) collect userinput with useRef
// 2) setCountryValue to the ref value
// 3) form on submit triggers function

import React, { useRef } from 'react';
import { fetchCountryData } from './store/search-action';
import { useDispatch, useSelector } from 'react-redux';
import { createKeywordTypeNode } from 'typescript';
import classes from './Header.module.css';

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
		// console.log(confirmed);
	};

	return (
		<React.Fragment>
			<h1 className={classes.title}>Covid Statistics by Country!!</h1>
			<form onSubmit={fetchCountryDataHandler} className={classes.form}>
				<input
					type='search'
					id='country-search'
					placeholder='Search Country Name Here...'
					ref={countryRef}
					className={classes.search}
				/>
				<button>SEARCH</button>
			</form>
		</React.Fragment>
	);
};

export default Header;
