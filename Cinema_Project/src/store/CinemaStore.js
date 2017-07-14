import { EventEmitter } from 'events';

import dispatcher from './dispatcher';

import bookingJson from '../data/BookingInfo.json';
import cinemaJson from '../data/CinemaLocations.json';
import movieJson from '../data/MovieDetails.json';
import showingsJson from '../data/ShowingTimes.json';

class CinemaStore extends EventEmitter {
	
	  constructor() {
    super();
	
		this.bookings = bookingJson.bookingInfo;
		this.cinemas = cinemaJson.cinemas;
		this.movies = movieJson.movieDetails;
		this.showings = showingsJson.showingTimes;
		
		this.filteredMovies = [];
		}

	getAllBookings() {
		return this.bookings;
	}	

	getAllCinemas() {
		return this.cinemas;
	}	
  
	getCinemaByIndex(index){
		return this.cinemas[index];
	}

	getAllMovies() {
		return this.movies;
	}	

	getAllCarouselMovies() {
		let carouselMovies=[];
			for(let i =0; i<this.movies.length; i++){
				let curMovie = this.movies[i];
				if(curMovie.carousel != null){
				carouselMovies.push(curMovie);
				}
			}
		
		return carouselMovies;
	}	

  
	getMovieByIndex(index){
		return this.movies[index];
	}

	getAllShowings() {
		return this.showings;
	}
  
	getMoviesByRelease(){
	
		let sortArray = this.movies;
		for(let i=0 ; i<sortArray.length; i++){
			for(let j=i; j<sortArray.length; j++){
			
				let a = new Date(sortArray[i].releaseDate);
				let b = new Date(sortArray[j].releaseDate);
				
				if (a>b){
					let tempObj=sortArray[i];
					sortArray[i]=sortArray[j]
					sortArray[j]=tempObj;
				
				}
			}
		}
		sortArray.reverse();
		return sortArray;
	}
	
	getShowingByIndex(index){
		return this.showings[index];
	}
  
	getFilteredMovies() {
		return this.filteredMovies;
	}
 
  
	filterMoviesBySearch(searchParameters) {
		this.filteredMovies = [];
		this.movies.forEach((movie) => {
		if(movie.name.indexOf(searchParameters) !== -1) {this.filteredMovies.push(movie);}});
		this.emit('moviesChange');
	}

	handleActions(action) {
		switch(action.type) {
			case "FILTER_SEARCH":
				this.filterMoviesBySearch(action.searchParameters);
				break;
			default:
				break;
		}
	}  
}	
	  
const cinemaStore = new CinemaStore();
dispatcher.register(cinemaStore.handleActions.bind(cinemaStore));
export default cinemaStore;