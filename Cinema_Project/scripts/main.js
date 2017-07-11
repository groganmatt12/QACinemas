import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import ListingGallery from './ListingGallery';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Booking from './Booking';
import Showings from './Showings';
import Confirmation from './Confirmation';


ReactDOM.render(
	let bookingTarget = "/Confimation/";
	let showingsTarget = "/Booking/";
	let movieDetailsTarget = "/Showings/";
	let listingGalleryTarget = "/MovieDetails/";
	
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}></IndexRoute>

			<Route path='/ListingGallery' component={ListingGallery} />	
			<Route path= listingGalleryTarget + ':key' component={MovieDetails} />
			<Route path= movieDetailsTarget + ':movieID' component={Showings} />
			<Route path= showingsTarget + ':showingID' component={Booking} />
			<Route path= bookingTarget + ':showingID/:quantity' component={Confirmation} />
			
		</Route>	
	</Router>

, document.querySelector('#app'));
