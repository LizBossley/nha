import React, { Component } from 'react';
import { Link } from 'react-router';
import UserList from '../containers/user-list';

class MainNav extends Component {
	render() {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="dropdown menu" data-dropdown-menu>
				      	<li className="menu-text"><Link to="/">New Hope Academy</Link></li>
				    </ul>
				</div>
			  	<div className="top-bar-right">
				    <UserList />
			  	</div>
			</div>
		);
	}
}

export default MainNav;