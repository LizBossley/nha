import React, { Component } from 'react';
import { connect} from 'react-redux';
import PostsList from './posts-list';

class Dashboard extends Component {

	render() {
		return (
			<div>
				<h2>Home</h2>
				<div className="row">
					<div className="small-6 columns">
						<PostsList />
					</div>
				</div>
			</div>
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
export default connect(mapStateToProps, null)(Dashboard);


