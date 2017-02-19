import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect} from 'react-redux';
import { selectUser } from '../actions/index';
import { fetchUsers } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserList extends Component {
	componentWillMount() {
		this.props.fetchUsers();
	}

	checkActiveUser() {
		if(!this.props.activeUser) {
			return <span>Login</span>
		} else {
			return <span>{this.props.activeUser.name}</span>
		}
	}

	renderList() {
		return this.props.users.map((user) => {
			return (
				<li 
				key={user.id} 
				onClick={() => this.props.selectUser(user)}
				className="list-group-item">
				{user.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="dropdown menu" data-dropdown-menu>
		      	<li>
		        	<a href="#">
		        	{this.checkActiveUser()}
		        	</a>
		        	<ul className="user-list">
			        	{this.renderList()}
			        	<li onClick={() => this.props.selectUser(null)}>
			        		Logout
			        	</li>
			        </ul>
	      		</li>
	    	</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users.all,
		activeUser: state.activeUser 
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectUser: selectUser }, dispatch);
}


// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
export default connect(mapStateToProps, { fetchUsers, selectUser })(UserList);