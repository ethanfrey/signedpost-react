import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Users from './components/Users';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="users" component={Users}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
