import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, initialize } from 'redux-form';
import { fetchPost, editPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
	title: {
		type: 'input',
		label: 'Title for Post'
	},
	categories : { 
		type: 'input',
		label: 'Enter categories',
	},
	content: { 
		type: 'textarea',
		label: 'Post Contents'
	}
};

class PostsEdit extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	componentDidMount() {
	  this.handleInitialize();	
	  console.log("I'm here!");
	}

	handleInitialize() {
		console.log(this.props);

	  const initData = {
	    "title": this.props.post.title,
	    "categories": this.props.post.categories,
	    "content": this.props.posts.content
	  };

	  // this.props.initialize(initData);
	}

	onSubmit(props) {
		this.props.editPost(this.props.params.id, props)
		.then(() => {
			this.context.router.push(`/posts/${this.props.params.id}`);
		});
	}

	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field];

		return (
			<div key={fieldConfig.label} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
				<label>{fieldConfig.label}</label>
				<fieldConfig.type type="text" className="form-control" {...fieldHelper} />
				<div className="text-help">
					{fieldHelper.touched ? fieldHelper.error : '' }
				</div>
			</div>
		)
	}

	render () {
		console.log(this.props);
		const { handleSubmit, pristine } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				
				{_.map(FIELDS, this.renderField.bind(this))}

				<button type="submit" className="button success">Submit</button>
				<Link to="/" className="button alert">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Enter a ${field}`;
		}
	});

	return errors;
}

PostsEdit = reduxForm({
  	form: 'PostsEditForm',
	fields: _.keys(FIELDS),
	validate 
})(PostsEdit)

function mapStateToProps(state) {
	return { 
		post: state.posts.post
	};
}

export default connect(mapStateToProps, { fetchPost, editPost })(PostsEdit);