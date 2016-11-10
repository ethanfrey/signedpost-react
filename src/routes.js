import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import About from './components/About';
import UserPage from './containers/UserPage';
import UserPostPage from './containers/UserPostPage';
import PostPage from './containers/PostPage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="users" component={UserPage}/>
    <Route path="users/:userId/posts" component={UserPostPage}/>
    <Route path="users/:userId/posts/:number" component={PostPage}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
