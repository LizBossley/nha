import React, { Component } from 'react';
import { connect} from 'react-redux';

import MemberList from './member-list';
class Directory extends Component {
	checkActiveUser() {
		if(!this.props.activeUser) {
			return <span>Login</span>
		} else {
			return <span>{this.props.activeUser.name}</span>
		}
	}

	render() {
		return (
			<div>
				{this.checkActiveUser()}
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
		members: state.members,
		activeUser: state.activeUser  
	};
}

//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, null)(Directory);


