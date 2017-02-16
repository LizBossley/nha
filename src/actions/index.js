import axios from 'axios';

const ROOT_URL = `http://pokeapi.co/api/v2/pokemon/`;

export const FETCH_RECRUIT = 'FETCH_RECRUIT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

export function fetchRecruit(person) {
	const url = `${ROOT_URL}${person}/`;
	const request = axios.get(url);

	return {
		type: FETCH_RECRUIT,
		payload: request
	};
}

export function fetchPosts() {
	const url = `http://localhost:3000/posts`;
	const request = axios.get(url);
	console.log(request);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}