import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path='/ListingsPage' component={ListingsPage}></Route>
			<Route path='/MovieDetails' component={MovieDetails}>
				<Route path='/MovieDetails:Showings' component={MovieShowings}>
			</Route>
			<Route path='/Booking' component={Booking}></Route>
			<Route path='/Confirmation' component={Confirmation}></Route>
		</Route>	
	</Router>	
, document.querySelector('#app'));
