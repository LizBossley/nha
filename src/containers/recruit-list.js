import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecruitList extends Component {
	renderRecruit(recruitData) {
		if (!recruitData) {
			return <tr><td>No results to display. Try another name</td></tr>;
		}

		console.log(recruitData);

		const name = recruitData.name;
		const weight = recruitData.weight;

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>{weight}</td>
				<td></td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Weight</th>
					</tr>
				</thead>
				<tbody>
					{this.props.recruits.map(this.renderRecruit)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({recruits}) {
	return { recruits }; 
}

export default connect(mapStateToProps)(RecruitList);