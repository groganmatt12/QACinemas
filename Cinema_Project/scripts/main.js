import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import ListingGallery from './ListingGallery';


ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={ListingGallery}></IndexRoute>
			
		</Route>	
	</Router>
, document.querySelector('#app'));
