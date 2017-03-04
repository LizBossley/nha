import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fetchRecruits } from '../../actions/index';

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
					<div className="small-3 columns">
						{recruit.name}
					</div>	
					<div className="small-3 columns">
						{recruit.race}
					</div>
					<div className="small-6 columns">
						{recruit.skills.join(", ")}
					</div>		
				</div>
			);
		});
	}

	render() {
		return (
			<div className="recruits-list">
				<div className="row">
					<div className="small-3 columns">Name</div>
					<div className="small-3 columns">Race</div>
					<div className="small-6 columns">Skills</div>
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


