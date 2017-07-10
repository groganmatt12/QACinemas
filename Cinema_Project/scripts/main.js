import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import ListingGallery from './ListingGallery';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Booking from './Booking';
import Showings from './Showings';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path='/ListingGallery' component={ListingGallery}>
				
			</Route>
			<Route path='/Booking' component={Booking} />
			<Route path='/Showings' component={Showings} />
		</Route>	
	</Router>

, document.querySelector('#app'));
