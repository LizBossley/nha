import React, { Component } from 'react';
import { connect} from 'react-redux';
import PostsList from '../../containers/posts-list';

class Dashboard extends Component {

	render() {
		return (
			<div>
				<h2>Home</h2>
				<div className="row">
					<div className="small-8 columns">
						<PostsList />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		members: state.members 
	};
}

export default connect(mapStateToProps, null)(Dashboard);


