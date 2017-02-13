import React, { Component } from 'react';
import { connect} from 'react-redux';

import MemberList from './member-list';
class Directory extends Component {

	render() {
		return (
			<div>
				<h2>Directory</h2>
				<MemberList />
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
export default connect(mapStateToProps, null)(Directory);


