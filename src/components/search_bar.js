import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { inputValue: '', term: '' };
	}

	render() {
		return (
			<div>
				<input onChange={e => this.setState({ inputValue: e.target.value })} />
			</div>
		);
	}
}

export default SearchBar;