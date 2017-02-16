import { FETCH_RECRUIT } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_RECRUIT: 
			// return state.concat([ action.payload.data ]);
			return [ action.payload.data ]; //es6 syntax, works basically same as above although position of new data different (easy fix)
	}
	return state;
}
//initial state of array instead of null