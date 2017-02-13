import React, { Component } from 'react';
import { Link } from 'react-router';

class MainNav extends Component {
	render() {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="dropdown menu" data-dropdown-menu>
				      	<li className="menu-text"><Link to="/">Site Title</Link></li>
				    </ul>
				</div>
			  	<div className="top-bar-right">
				    <ul className="dropdown menu" data-dropdown-menu>
				      	<li>
				        	<a href="#">John Student</a>
				        	<ul className="menu vertical">
					          	<li><Link to="/account">Account</Link></li>
					          	<li><a href="#">Help</a></li>
					          	<li><a href="#">Logout</a></li>
			        		</ul>
			      		</li>
			    	</ul>
			  	</div>
			</div>
		);
	}
}

export default MainNav;