import React, { Component } from 'react';

class MainNavigation extends Component {
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
				        	<a href="#">One</a>
				        	<ul className="menu vertical">
					          	<li><a href="#">One</a></li>
					          	<li><a href="#">Two</a></li>
					          	<li><a href="#">Three</a></li>
			        		</ul>
			      		</li>
			    	</ul>
			  	</div>
			</div>
		);
	}
}

export default MainNavigation;