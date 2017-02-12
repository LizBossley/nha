import React, { Component } from 'react';

class MainNav extends Component {
	render() {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="dropdown menu" data-dropdown-menu>
				      	<li className="menu-text">Site Title</li>
				    </ul>
				</div>
			  	<div className="top-bar-right">
				    <ul className="dropdown menu" data-dropdown-menu>
				      	<li>
				        	<a href="#">John Student</a>
				        	<ul className="menu vertical">
					          	<li><a href="#">Account</a></li>
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