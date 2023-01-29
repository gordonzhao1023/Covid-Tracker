import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
	name: 'country',
	initialState: {
		loading: false,
		error: false,
		countryInput: '',
		countryData: {
			confirmCases: null,
			deathCases: null,
		},
	},
	reducers: {
		setCountryInput(state, action) {
			state.countryInput = action.payload;
		},
		// NEED TO DETERMINE IF WE ACTUALLY NEED A SEPERATE FUNCTION
		setCountryData(state, action) {
			const data = action.payload;
			state.countryData = Object.assign(state.countryData, data);
		},
		toggleLoading(state) {
			state.loading = !state.loading;
		},
		toggleError(state) {
			state.error = !state.error;
		},
	},
});

export const countryActions = countrySlice.actions;

export default countrySlice;
