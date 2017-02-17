import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainNavigation from './containers/main-navigation';
import Directory from './containers/view-directory';
import Dashboard from './containers/view-dashboard';
import Account from './containers/view-account';
import Recruitment from './containers/view-recruitment';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="/directory" component={Directory} />
		<Route path="/account" component={Account} />
		<Route path="/recruitment" component={Recruitment} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);