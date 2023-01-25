import React from 'react';

const Header = () => {
	return (
		<React.Fragment>
			<h1>Country</h1>
			<form>
				<input
					type='search'
					id='country-search'
					placeholder='Search Country Names'
				/>
				<button>SEARCH</button>
			</form>
		</React.Fragment>
	);
};

export default Header;
