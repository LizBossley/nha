import { combineReducers } from 'redux';
import MembersReducer from './reducer_members.js';

const rootReducer = combineReducers({
 	members: MembersReducer,
});

export default rootReducer;
