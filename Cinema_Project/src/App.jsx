import React from 'react';
import CinemaStore from './store/CinemaStore'
import Header from './Header'
import Footer from './Footer'
import movieJson from '../MovieDetails.json';

export default class App extends React.Component{
   getInitialState(){
		CinemaStore.loadMoviesFromAPI();
	}


   render(){
	   CinemaStore.loadMoviesFromAPI();
			return(
				<div>
					<Header />
					<div id="domMain">
						<main>{this.props.children}</main>
					</div>
					<Footer />
				</div>
			);
		
    }
	
}
