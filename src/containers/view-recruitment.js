import React, { Component } from 'react';
import { connect} from 'react-redux';

import SearchBar from './recruit-search-bar';
import RecruitList from './recruit-list';

class Recruitment extends Component {
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
				<h2>Recruitment</h2>
				<SearchBar />
				<RecruitList />
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
export default connect(mapStateToProps, null)(Recruitment);


