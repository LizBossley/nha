import { combineReducers } from 'redux';
import MembersReducer from './reducer_members.js';
import RecruitsReducer from './reducer_recruits.js';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 	members: MembersReducer,
 	recruits: RecruitsReducer,
 	posts: PostsReducer,
 	form: formReducer
});

export default rootReducer;
