import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	//This gives us access to the router
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.id)
		.then(() => {
			this.context.router.push('/');
		});
	}

	checkActiveUser() {
		if(this.props.activeUser && this.props.activeUser.type == "faculty") {
			return 	(
				<button 
					className="button alert float-right"
					onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
			);				
		} 
	}

	render () {
		const { post } = this.props;

		if(!post) {
			return <div> Loading...</div>
		}

		return (
			<div>
				<Link to="/">Back to Dashboard</Link>
				{this.checkActiveUser()}
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
			); 
	}
}

function mapStateToProps(state) {
	return { 
		post: state.posts.post,
		activeUser: state.activeUser
	};
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);