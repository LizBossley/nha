import React, { Component } from 'react';
import { connect} from 'react-redux';
import RecruitList from './components/recruit-list';

class Recruitment extends Component {


	render() {
		return (
			<div>
				<h2>Recruitment</h2>
				<RecruitList />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recruits: state.recruits 
	};
}

export default connect(mapStateToProps, null)(Recruitment);
