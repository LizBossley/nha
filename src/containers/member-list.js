import React, { Component } from 'react';
import { connect} from 'react-redux';


class MemberList extends Component {
	renderList() {
		return this.props.members.map((member) => {
			return (
				<li 
				key={member.name} 
				className="list-group-item">
				{member.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
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
export default connect(mapStateToProps, null)(MemberList);


