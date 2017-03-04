import React, { Component } from 'react';
import { connect} from 'react-redux';
import RecruitList from './recruit-list';

class Recruitment extends Component {
	// renderList() {
	// 	return this.props.recruits.map((recruit) => {
	// 		return (
	// 			<tr key={recruit.id} >
	// 				<td>{recruit.id}</td>
	// 				<td>{recruit.name}</td>
	// 				<td>{recruit.race}</td>			
	// 			</tr>
	// 		);
	// 	});
	// }

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



//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, null)(Recruitment);


