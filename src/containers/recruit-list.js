import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecruitList extends Component {
	renderRecruit(recruitData) {
		console.log(recruitData);
		console.log("here");
		const name = recruitData.name;
		// const temps = cityData.list.map(weather => weather.main.temp);
		// const pressures = cityData.list.map(weather => weather.main.pressure);
		// const humidities = cityData.list.map(weather => weather.main.humidity);
		// const { lon, lat } = cityData.city.coord; //es6 syntax


		return (
			<tr key={name}>
				<td>{name}</td>
				<td>I wish</td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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
	return { recruits }; //weather because we combined it to weather on the reducer
	//{ weather } === { weather: weather }
}

export default connect(mapStateToProps)(RecruitList);