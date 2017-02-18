import { USER_ACTIVE } from '../actions/index';

export default function(state = null, action) {
	switch(action.type) {
		case USER_ACTIVE:
			return action.payload;
	}

	return state; 
}