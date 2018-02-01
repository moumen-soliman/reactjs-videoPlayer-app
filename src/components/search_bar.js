import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { inputValue: ''};
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.inputValue}
					onChange={e => this.setState({ inputValue: e.target.value })} />
			</div>
		);
	}
}

export default SearchBar;