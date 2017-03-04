import { FETCH_COURSES, FETCH_COURSE } from '../actions/index';

const INITIAL_STATE = { all: [], course: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_COURSE:
			return { ...state, course: action.payload.data };

		case FETCH_COURSES:
			return { ...state, all: action.payload.data };

		default:
			return state;
	}
}