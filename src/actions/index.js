import axios from 'axios';

const ROOT_URL = `http://pokeapi.co/api/v2/pokemon/`;
const POSTS_URL = `http://localhost:3000/posts`;

export const FETCH_RECRUIT = 'FETCH_RECRUIT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchRecruit(person) {
	const url = `${ROOT_URL}${person}/`;
	const request = axios.get(url);

	return {
		type: FETCH_RECRUIT,
		payload: request
	};
}

export function fetchPosts() {
	const request = axios.get(POSTS_URL);
	console.log(request);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${POSTS_URL}/${id}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}


export function createPost(props) {
	const request = axios.post(`${POSTS_URL}`, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function deletePost(id) {
	const request = axios.delete(`${POSTS_URL}/${id}`);

	return {
		type: DELETE_POST,
		payload: request
	};
}