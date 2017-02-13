import React, { Component } from 'react';
import { connect} from 'react-redux';

class Dashboard extends Component {
	renderList() {
		return this.props.members.map((member) => {
			return (
				<tr key={member.id} >
					<td>{member.id}</td>
					<td>{member.name}</td>
					<td>{member.race}</td>			
				</tr>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Home</h2>
				<table className="stacked hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Race</th>
						</tr>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props 
	// inside of BookList
	return {
		members: state.members 
	};
}



//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, null)(Dashboard);


