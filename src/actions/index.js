import axios from 'axios';

const ROOT_URL = `https://swapi.co/api/people/`;

export const FETCH_RECRUIT = 'FETCH_RECRUIT';

export function fetchRecruit(person) {
	const url = `${ROOT_URL}?search=${person}`;
	console.log(url);
	const request = axios.get(url);
	console.log(request);

	return {
		type: FETCH_RECRUIT,
		payload: request
	};
}