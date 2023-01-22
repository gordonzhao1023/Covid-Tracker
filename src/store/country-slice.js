import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
	name: 'country',
	initialState: {
		loading: false,
		error: false,
		countryInput: '',
		countryData: {
			confirmCases: null,
			activeCases: null,
			deathCases: null,
			recoveredCases: null,
		},
	},
	reducers: {
		setCountryInput(state, action) {
			state.countryInput = action.payload;
		},
		setCountryData(state, action) {
			const data = action.payload;
			countryData = Object.assign(countryData, data);
		},
	},
});

export const countryActions = countrySlice.actions;

export default countrySlice;
