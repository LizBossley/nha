import { combineReducers } from 'redux';
import MembersReducer from './reducer_members.js';
import RecruitsReducer from './reducer_recruits.js';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
 	members: MembersReducer,
 	recruits: RecruitsReducer,
 	posts: PostsReducer,
});

export default rootReducer;
