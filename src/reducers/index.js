import { combineReducers } from 'redux';
import RecruitsReducer from './reducer_recruits.js';
import PostsReducer from './reducer_posts';
import UserReducer from './reducer_users';
import ActiveUserReducer from './reducer_active_user';
import CoursesReducer from './reducer_courses';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 	recruits: RecruitsReducer,
 	posts: PostsReducer,
 	form: formReducer, 
 	users: UserReducer,
 	activeUser: ActiveUserReducer,
 	courses: CoursesReducer
});

export default rootReducer;
