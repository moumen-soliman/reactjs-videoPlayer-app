import React from 'react';
import ReactDOM from 'react-dom';

//another files
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCoWJAtvMXQbO-N2Rk_o4szInJOpCFz_c0';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));