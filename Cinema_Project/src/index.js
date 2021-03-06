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
import Forum from './Forum';
import GoogleMaps from './GoogleMaps/GoogleMaps';
/*import ContactUs from './ContactUs';*/



ReactDOM.render(
	
	
	
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}></IndexRoute>

			<Route path = "/ListingGallery" component={ListingGallery} />	
			<Route path = "/MovieDetails/:key" component={MovieDetails} />
			<Route path = "/Showings/:movieID" component={Showings}/>
			<Route path = "/Booking/:showingID" component={Booking} />
			<Route path = "/Classification" component={Classification} />
			<Route path = "/Confimation/:showingID/:quantity" component={Confirmation}/>
			<Route path = "/Forum" component={Forum} />
			<Route path = "/Map" component={GoogleMaps} />
			<Route path = "/*" component={Home}/>
			{/*<Route path = "/ContactUs" component={ContactUs} />*/}
			
>>>>>>> Develop
		</Route>	
	</Router>

, document.querySelector('#app'));

