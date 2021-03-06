import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
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

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
		.then(() => {
			this.context.router.push('/');
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
		const { handleSubmit } = this.props;
		// const { fields: { title, categories, content }, handleSubmit } = this.props;
		//above same as const handleSubmit = this.props.handleSubmit or title = this.props.fields.title
		
		//we are handing a destructured ...title/etc so that redux-form can completely handle the form
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

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: _.keys(FIELDS),
	validate
}, null, { createPost })(PostsNew);