import { FETCH_RECRUITS, FETCH_RECRUIT } from '../actions/index';

const INITIAL_STATE = { all: [], user: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_RECRUIT:
			return { ...state, user: action.payload.data };

		case FETCH_RECRUITS:
			return { ...state, all: action.payload.data };

		default:
			return state;
	}
}