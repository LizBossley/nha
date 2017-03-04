import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainNavigation from './components/main-navigation';
import Dashboard from './scenes/dashboard/view-dashboard';
import Account from './scenes/account/view-account';
import Recruitment from './scenes/recruit/view-recruitment';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PostsEdit from './components/posts_edit';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />	
		<Route path="/account" component={Account} />
		<Route path="/recruitment" component={Recruitment} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
		<Route path="posts/edit/:id" component={PostsEdit} />
	</Route>
);