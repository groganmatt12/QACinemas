import { EventEmitter } from 'events';

import dispatcher from './dispatcher';

import bookingJson from '../data/BookingInfo.json';
import cinemaJson from '../data/CinemaLocations.json';
import movieJson from '../../MovieDetails.json';
import showingsJson from '../data/ShowingTimes.json';

import mongoose from '../../node_modules/mongoose';
//var MovieModel = require('./models/movies');


class CinemaStore extends EventEmitter {
	
	constructor() {
		super();
		
		this.bookings = bookingJson.bookingInfo;
		this.cinemas = cinemaJson.cinemas;
		this.movies = [];
		this.moviesFromDB=[];
		this.showings = showingsJson.showingTimes;		
		
		this.filteredMovies = [];
		this.sortedMovies = [];
		
		this.moviesByDate=[];
		this.carouselMovies = [];
		this.genres = this.generateGenreList();
		this.classification = this.generateClassificationList();
		
	}
	loadMoviesFromAPI(){
		this.movies = [];
		let myStore = this;
		fetch("/api/movies").then(function(data){
			return data.json()
		}).then( json => {
			json.forEach((movie) =>{
				//post objects
				console.log(movie);
				this.movies.push(movie);
				
			});
			this.setInitials();
			setTimeout(function(){myStore.emit('DATALOAD');},1);
		});
		
		
	}
	
	setInitials(){
		console.log("timingtest")
		this.genres = this.generateGenreList();
		this.classification = this.generateClassificationList();
		this.setAllCarouselMovies();
		this.setMoviesByRelease();
		this.filteredMovies = this.movies.slice();
		this.sortedMovies = this.movies.slice();
	}
	getSortedMovies() {
		return this.sortedMovies;
	}
	getArrayOfGenres(){
		return this.genres;
	}
	getGenreList(){

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
	
	getAllCarouselMovies(){
		return this.carouselMovies;
	}
	
	setAllCarouselMovies() {
		
		for(let i =0; i<this.movies.length; i++){
			let curMovie = this.movies[i];
			if(curMovie.carousel != null){
				this.carouselMovies.push(curMovie);
			}
		}
		
		
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
	getMoviesByRelease(){
		return this.moviesByDate;
	}

	setMoviesByRelease(){
		
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
	}
	
	getShowingByIndex(index){
		return this.showings[index];
	}


	filterMoviesBySearch(searchParameters) {
		this.filteredMovies = [];
		this.movies.forEach((movie) => {
			if(movie.name.toUpperCase().indexOf(searchParameters.toUpperCase()) !== -1) {this.filteredMovies.push(movie);}});
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
			case "MOVIE_SEARCH":
				this.filterMovies(action.parameterArray);
			break;
			case "SORT_MOVIES":
				console.log(action.sortType + " -- " + action.sortOrder);
				this.sortMovies(action.sortType, action.sortOrder);
			break;
			default:
			break;
		}
	}
	
		/*
	
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
	
	*/
	
	sortMovies(sortType, sortOrder){
		
		console.log("Sorting " + sortType + " - " + sortOrder);
		this.sortedMovies = this.filteredMovies.slice();
		
		switch(sortType) {
			case "RELEASE_DATE":
				this.sortedMovies.sort(function(a,b){
					let aAsMilliseconds = Date.parse(a.releaseDate);
					let bAsMilliseconds = Date.parse(b.releaseDate);
					
					if(sortOrder == "ASCENDING"){
						return aAsMilliseconds - bAsMilliseconds;
					}else{
						return bAsMilliseconds - aAsMilliseconds;
					}
				})
			break;
			case "MOVIE_TITLE":
				this.sortedMovies.sort(function(a,b){
					let movieTitleA = a.name.toUpperCase();
					let movieTitleB = b.name.toUpperCase();
					
					if(sortOrder == "ASCENDING"){
						
						if (movieTitleA < movieTitleB) {
							return -1;
						}
						if (movieTitleA > movieTitleB) {
							return 1;
						}
						return 0;

					}else{
						
						if (movieTitleA > movieTitleB) {
							return -1;
						}
						if (movieTitleA < movieTitleB) {
							return 1;
						}
						return 0;
					}
				})
			break;
			default:
			break;
		}
		

		
		console.log(this.sortedMovies);
		this.emit("moviesChange");
		
	}


	filterMovies(parameterArray){
		this.filteredMovies_Search = [];
		
		console.log("Testing sort params: " + parameterArray[3] + " : " + parameterArray[4]);
		let searchParameters = parameterArray[0];
		let selectedGenreList = parameterArray[1];
		let selectedClassificationList = parameterArray[2];
		console.log("Passed in Parameters");
		console.log(searchParameters);
		console.log(selectedGenreList);
		console.log(selectedClassificationList);
		{/*Search Bar Handling*/}
		
		this.movies.forEach((movie) => {
			if(movie.name.toUpperCase().indexOf(searchParameters.toUpperCase()) !== -1) {this.filteredMovies_Search.push(movie);}
		});
		{/*Search Bar Handling WORKING*/}	
		console.log("Results from text search");	
		console.log(this.filteredMovies_Search);
		{/*Genre Filter Handling*/}
		console.log("Genres array length" + selectedGenreList.length);
		if(selectedGenreList.length !== 0){
			let currentIndex = 0;
			this.filteredMovies_Genre = [];
			let filteredMovieSet = new Set([]);
			
			this.filteredMovies_Search.forEach((movie) => {
				let currentMovieGenreArray = movie.genre;
				console.log("Movie in genre filter:" + movie.name);
				currentMovieGenreArray.forEach((genre) =>{
					
					for(let i=0; i<currentMovieGenreArray.length; i++){
						for(let j=0; j<selectedGenreList.length; j++){
							console.log("compare: " + selectedGenreList[j] + " : " + currentMovieGenreArray[i]);
							if(selectedGenreList[j] == currentMovieGenreArray[i]){
								filteredMovieSet.add(movie);
								console.log("Movie considered match:" + movie.name);
							}
						}
					}
					currentIndex++;
				});
				
			});
			this.filteredMovies_Genre = Array.from(filteredMovieSet)
		}
		else{
			this.filteredMovies_Genre = this.filteredMovies_Search;
		}
			console.log(this.filteredMovies_Genre);
		{/*Genre Filter Handling*/}
			
			
		{/*Classification Filter Handling*/}	
		
		this.filteredMovies_Classification = [];
		
		if(selectedClassificationList.length !== 0){
		
		this.filteredMovies_Genre.forEach((movie) => {
			let classificationOfCurrentMovie = movie.classification;
			selectedClassificationList.forEach((classification) =>{
				if(classificationOfCurrentMovie == classification){
					this.filteredMovies_Classification.push(movie);
				}
			});
		});
		
		this.filteredMovies = this.filteredMovies_Classification;
		
		} else {
			
			this.filteredMovies = this.filteredMovies_Genre;
		}
		{/*Classification Filter Handling*/}
		
		 {/*Final Result*/}
	
		this.sortMovies(parameterArray[3], parameterArray[4]);
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
	

	
	
	filterMoviesByClassification(classArray){
		this.filteredMovies = [];		
		let tempArray = [];
		
		this.movies.forEach((movie) => {
			let curMovieClassification = movie.classification;
			
			for(let i = 0; i < classArray.length; i++){
				if(curMovieClassification == classArray[i]){
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
	
	generateClassificationList(){
		let classSet = new Set([]);
		let movieArray = this.movies.slice();
		
		for(let i = 0; i < movieArray.length; i++){
			classSet.add(movieArray[i].classification);
		}
		let classArray = Array.from(classSet);
		return classArray;
	}

}

const cinemaStore = new CinemaStore();

dispatcher.register(cinemaStore.handleActions.bind(cinemaStore));
export default cinemaStore;