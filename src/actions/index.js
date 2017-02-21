import axios from 'axios';

const POSTS_URL = `http://localhost:3000/posts`;
const USERS_URL = `http://localhost:3000/users`;
const RECRUITS_URL = `http://localhost:3000/recruits`;

export const FETCH_RECRUIT = 'FETCH_RECRUIT';
export const FETCH_RECRUITS = 'FETCH_RECRUITS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const USER_ACTIVE = 'USER_ACTIVE';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

export function fetchRecruits() {
	const request = axios.get(RECRUITS_URL);
	console.log(request);

	return {
		type: FETCH_RECRUITS,
		payload: request
	};
}

export function fetchRecruit(id) {
	const request = axios.get(`${RECRUITS_URL}/${id}`);
	console.log(request);

	return {
		type: FETCH_RECRUIT,
		payload: request
	};
}

export function fetchPosts() {
	const request = axios.get(`${POSTS_URL}/?_limit=5&_sort=id&_order=DESC`);

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

export function selectUser(user) {
	return {
		type: USER_ACTIVE,
		payload: user
	}
}

export function fetchUsers() {
	const request = axios.get(USERS_URL);

	return {
		type: FETCH_USERS,
		payload: request
	};
}

export function fetchUser(id) {
	const request = axios.get(`${USERS_URL}/${id}`);

	return {
		type: FETCH_USER,
		payload: request
	};
}