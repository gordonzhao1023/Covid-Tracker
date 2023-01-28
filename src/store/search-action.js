import { countryActions } from './country-slice';

export const fetchCountryData = (country) => {
	return async (dispatch) => {
		const fetchData = async () => {
			dispatch(countryActions.toggleLoading());
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'622f153d39msh4b8a2b9462b3147p1e2c45jsnc446156e189c',
					'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
				},
			};

			const response = await fetch(
				`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`,
				options
			);

			if (!response.ok) {
				throw new Error('Country not found!!');
			}

			const data = await response.json();
			// console.log(data);
			return data;
		};

		try {
			const countryData = await fetchData();
			dispatch(countryActions.toggleLoading());
			dispatch(
				countryActions.setCountryData({
					confirmCases: countryData.data.confirmed,
					deathCases: countryData.data.deaths,
				})
			);
			dispatch(countryActions.setCountryInput(countryData.data.location));
		} catch (err) {
			console.log(err);
		}
	};
};
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '622f153d39msh4b8a2b9462b3147p1e2c45jsnc446156e189c',
// 		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
// 	},
// };

// try {
// 	const response = await fetch(
// 		'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada',
// 		options
// 	);
// 	const data = await response.json();
// 	return data;
// } catch (err) {
// 	console.log(err);
// }
