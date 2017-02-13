import React, { Component } from 'react';
import { Link } from 'react-router';

class SideBar extends Component {
	render() {
		return(
			<div >
				<ul className="vertical menu" data-accordion-menu>
				  <li>
				    <a href="#">Item 1</a>
				    <ul className="menu vertical nested">
				      <li><a href="#">Item 1A</a></li>
				      <li><a href="#">Item 1B</a></li>
				    </ul>
				  </li>
				  <li><Link to="/directory">Directory</Link></li>
				  <li><Link to="/recruitment">Recruitment</Link></li>
				</ul>
			</div>
		);
	}
}

export default SideBar;