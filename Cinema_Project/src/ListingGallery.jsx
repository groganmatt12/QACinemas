import React from 'react';
import movieJson from './data/MovieDetails.json';
import MovieListing from './MovieListing';
import {Link, browserHistory} from 'react-router';
import CinemaStore from './store/CinemaStore';

export default class ListingGallery extends React.Component{
	constructor(props){
		super(props);
		this.state={
			movieListings:[],
			movies: CinemaStore.getAllMovies()
		};
		this._onChange = this._onChange.bind(this);
	}
	
	
	render(){
	
		
		return(
			<div>
				
				<div className="container">
					{this.state.movieListings}
				</div>
				
			</div>	
		);
		
	}
	
	componentWillMount(){
		CinemaStore.on("moviesChange", this._onChange);
		this.generateMovieListings();		
	}
	
	componentWillUnmount() {
		CinemaStore.removeEventListener("moviesChange", this._onChange);
    }
  
	_onChange() {
    this.setState({
      movies: CinemaStore.getFilteredMovies()
    });
	}
	
	pagechange(){
		browserHistory.push('/MovieDetails');
	}
	generateMovieListings(){
		
		let movieArr = this.state.movies;
		let array = this.state.movieListings;
		
		for(let i = 0; i<movieArr.length; i++){
			array.push(
				<MovieListing key={i} id={i} name={movieArr[i].name} img={movieArr[i].image} desc={movieArr[i].description} />
			);
		}
		this.setState({movieListings: array});
		
	}

}
