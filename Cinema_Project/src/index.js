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
import Classification from './Classification';
import Error_Page from './404';
/*import ContactUs from './ContactUs';*/
import CinemaStore from './store/CinemaStore';
CinemaStore.loadMoviesFromAPI();

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}></IndexRoute>

			<Route path = "/ListingGallery" component={ListingGallery} />	
			<Route path = "/MovieDetails" component={MovieDetails} />
			<Route path = "/Booking" component={Booking} />
			<Route path = "/Classification" component={Classification} />
			<Route path = "/Confimation/:showingID/:quantity" component={Confirmation}/>
				{/* <Route path = "/*" component={Error_Page} />
			{/*<Route path = "/ContactUs" component={ContactUs} />*/}
			
		</Route>	
	</Router>
, document.querySelector('#app'));

