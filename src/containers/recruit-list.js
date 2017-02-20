import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fetchRecruits } from '../actions/index';

class RecruitList extends Component {
	componentWillMount() {
		this.props.fetchRecruits();
	}

	renderList() {
		console.log("recruits");
		console.log(this.props.recruits);
		return this.props.recruits.map((recruit) => {
			return (
				<div className="row" key={recruit.id}>
					<div className="small-4 columns">
						{recruit.name}
					</div>	
					<div className="small-4 columns">
						{recruit.name}
					</div>
					<div className="small-4 columns">
						{recruit.notes}
					</div>		
				</div>
			);
		});
	}

	render() {
		return (
			<div className="recruits-list">
				<div className="row">
					<div className="small-4 columns">ID</div>
					<div className="small-4 columns">Name</div>
					<div className="small-4 columns">Notes</div>
				</div>
				{this.renderList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recruits: state.recruits.all
	};
}

export default connect(mapStateToProps, { fetchRecruits })(RecruitList);


