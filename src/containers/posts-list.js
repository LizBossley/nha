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
				<span className="pull-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</span>
			);				
		} 
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<div className="small-12 columns" key={post.id}>
					<Link to={"posts/" + post.id}>
						<h5>{post.title}</h5>
					</Link>
					<div>{post.content}</div>
				</div>
				);
		});
	}

	render () {
		return (
			<div>
				<div className="row">
					<div className="small-8 columns">
						<h3>Recent News</h3>
					</div>
					<div className="small-4 columns">
						{this.checkActiveUser()}
					</div>
				</div>
				<div className="row">
					{this.renderPosts()}
				</div>
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