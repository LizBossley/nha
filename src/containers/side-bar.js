import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect} from 'react-redux';
import { fetchCourses } from '../actions/index';

class SideBar extends Component {
	// componentWillReceiveProps() {
	// 	if(this.props.activeUser) {
	// 		console.log("yo");
	// 		this.props.fetchCourses(this.props.activeUser.courses);
	// 	}		
	// }

	renderCourseList() {
		if(this.props.activeUser) {
			// console.log(this.props.activeUser);
			this.props.fetchCourses(this.props.activeUser.courses);
			return (
				<li>
					<a href="#">Courses</a>
					<ul className="menu vertical nested">
						{
							

						}
					</ul>
				</li>
			);
		} 
	}

	renderAdminLinks() {
		if(this.props.activeUser && this.props.activeUser.type == "faculty") {
			return (
				<li><Link to="/recruitment">Recruitment</Link></li>
			);
		} 
	}

	render() {
		return(
			<div >
				<ul className="vertical menu" data-accordion-menu>				    
			    	{this.renderCourseList()}
				  	{this.renderAdminLinks()}
				  	<li><a href="#">About Us</a></li>
				  	<li><a href="#">Support</a></li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeUser: state.activeUser,
		course: state.courses.all  
	};
}

export default connect(mapStateToProps,{ fetchCourses })(SideBar);