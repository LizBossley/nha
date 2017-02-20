import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect} from 'react-redux';

class SideBar extends Component {
	renderCourseList() {
		if(this.props.activeUser) {
			return (
				<li>
					<a href="#">Courses</a>
					<ul className="menu vertical nested">
						{
							this.props.activeUser.courses.map((course) => {
								return (
									<li key={course.id}>
										<a href="#">{course.title}</a>
									</li>
								);
							})
						}
					</ul>
				</li>
			);
		} 
	}

	render() {
		return(
			<div >
				<ul className="vertical menu" data-accordion-menu>				    
			    	{this.renderCourseList()}
				  	<li><Link to="/recruitment">Recruitment</Link></li>
				  	<li><a href="#">About Us</a></li>
				  	<li><a href="#">Support</a></li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeUser: state.activeUser  
	};
}

export default connect(mapStateToProps, null)(SideBar);