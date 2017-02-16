import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecruit } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		//this is saying, take the function, bind it to this(SearchBar), and replace the existing function
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		//We need to go and fetch recruit data
		this.props.fetchRecruit(this.state.term);
		this.setState({ term: '' }); //convenience to user, clear out term when submit
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Enter recruit name here"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} 
				/>
				<span className="input-group-btn">
					<button type="submit" className="button">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRecruit }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
