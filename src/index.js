// Set up your application entry point here...
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import { Router, browserHistory } from 'react-router';
// import configureStore from './store/configureStore';
import { Router } from 'react-router';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render( 
	<Router routes={routes} />,
	document.getElementById('app')
);