import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsList extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	checkActiveUser() {
		if(this.props.activeUser && this.props.activeUser.type == "faculty") {
			return 	(
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
			);				
		} 
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
				);
		});
	}

	render () {
		return (
			<div>
				{this.checkActiveUser()}
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		posts: state.posts.all,
		activeUser: state.activeUser
	 };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);