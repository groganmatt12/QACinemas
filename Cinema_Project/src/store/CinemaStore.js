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
		this.moviesByDate=movieJson.movieDetails;
		this.genres = this.generateGenreList();
		this.classification = this.generateClassList();

	}

	getGenreList() {
		return this.genres;
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

	/*cinemaID, movieID & viewing time */
	getAllShowings() {
		return this.showings;
	}

	getShowingByIndex(index){
		return this.showings[index];
	}

	getShowingByCinemaAndMovie(cinema_id, movie_id){
		var showingsByCinemaAndMovie = [];
		for(let i = 0; i < this.showings.length;i++){
			
			if(this.showings[i].movieID == movie_id){
				if(this.showings[i].cinemaID == cinema_id){
					showingsByCinemaAndMovie.push(this.showings[i]);
				}
			}
		}
		if(showingsByCinemaAndMovie.length == 0)
			showingsByCinemaAndMovie.push({

				"showingTime" : "No Showings Scheduled"
			});
		return showingsByCinemaAndMovie;
	}


	getFilteredMovies() {
		return this.filteredMovies;
	}

	getMovieByIndex(index){
		return this.movies[index];
	}

	getAllShowings() {
		return this.showings;
	}

	getMoviesByRelease(){
		
		let sortArray = this.movies.slice();
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
		this.moviesByDate = sortArray;
		return this.moviesByDate;
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
			case "GENRE_SEARCH":
				this.filterMoviesByGenre(action.genreArray);
			break;
			case "CLASS_SEARCH":
			this.filterMoviesByClassification(action.classificationArray);
			break;
		}
	}


	filterMoviesByClassification(classArray){
		this.filteredMovies = [];		
		let tempArray = [];
		
		this.movies.forEach((movie) => {
			let curMovieClass = movie.classification;
			
			for(let i = 0; i < classArray.length; i++){
				if(curMovieClass == classArray[i]){
					tempArray.push(movie);
					this.filteredMovies = tempArray;
				}
			}
		});

		if(this.filteredMovies.length == 0){
			this.movies.forEach((movie) => {
				{this.filteredMovies.push(movie)}
			});
		}
		this.emit("moviesChange");
	}

	filterMoviesByGenre(genreArray){

		this.filteredMovies = [];
		let tempSet = new Set([]);
		this.movies.forEach((movie) => {
			let curMovGenres = movie.genre;

			for(let i=0; i<curMovGenres.length; i++){
				for(let j=0; j<genreArray.length; j++){
					if(genreArray[j] == curMovGenres[i]){
						tempSet.add(movie);
						console.log(Array.from(tempSet));
						{this.filteredMovies = Array.from(tempSet)}
					}
				}
			}		

		});

		if(this.filteredMovies.length == 0){
			this.movies.forEach((movie) => {
				{this.filteredMovies.push(movie)}
			});
		}
		this.emit("moviesChange");
	}

	generateGenreList() {
		let genreSet = new Set([]);
		let sortArray = this.movies.slice();

		for(let i = 0; i < sortArray.length; i++){
			for(let j = 0; j < sortArray[i].genre.length; j++) {
				genreSet.add(sortArray[i].genre[j]);
			}
		}
		return genreSet;
	}
	
	generateClassList(){
		let classSet = new Set([]);
		let movieArray = this.movies.slice();
		
		for(let i = 0; i < movieArray.length; i++){
			classSet.add(movieArray[i].classification);
		}
		let classArray = Array.from(classSet);
		return classArray;
	}

	generateClassList(){
		let classSet = new Set([]);
		let movieArray = this.movies.slice();

		for(let i = 0; i<movieArray.length; i++){
			classSet.add(movieArray[i].classification);
		}
		let classArray = Array.from(classSet);
		return classArray;
	}

}	



const cinemaStore = new CinemaStore();
dispatcher.register(cinemaStore.handleActions.bind(cinemaStore));
export default cinemaStore;