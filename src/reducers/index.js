import { combineReducers } from 'redux';
import MembersReducer from './reducer_members.js';
import RecruitsReducer from './reducer_recruits.js';

const rootReducer = combineReducers({
 	members: MembersReducer,
 	recruits: RecruitsReducer,
});

export default rootReducer;
