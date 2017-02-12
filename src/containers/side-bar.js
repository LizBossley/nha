import React, { Component } from 'react';

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
				  <li><a href="#">Item 2</a></li>
				</ul>
			</div>
		);
	}
}

export default SideBar;