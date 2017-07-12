import React from 'react';
import movieJson from './data/MovieDetails.json';
import MovieListing from './MovieListing';
import {Link, browserHistory} from 'react-router';
import CinemaStore from './store/CinemaStore';
import Sort from './Sort';
import * as CinemaActions from './actions/CinemaActions';
 
export default class ListingGallery extends React.Component{
	constructor(props){
		super(props);
		this.state={
			movieListings:[],
			movies: CinemaStore.getAllMovies(),
			filterText:''
		};
		this._onChange = this._onChange.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		
	}
	
	
	render(){
		
		
		return(
			<div>
				<Sort filterText={this.state.filterText} onUserSearchInput={this.handleSearchInput} />
				<br />
				<div className="container">
					{this.state.movieListings}
				</div>
				
			</div>	
		);
		
	}
	
	handleSearchInput (filterText){
		this.setState({filterText});
		CinemaActions.filterMoviesBySearch(filterText);
	}
	
	componentWillMount(){
		this.generateMovieListings();
		CinemaStore.on("moviesChange", this._onChange);
				
	}
	
	componentWillUnmount() {
		CinemaStore.removeEventListener("moviesChange", this._onChange);
    }
  
	_onChange() {
	console.log('change received');
    this.setState({
      movies: CinemaStore.getFilteredMovies()
    });
	
	this.generateMovieListings();
	
	}
	
	pagechange(){
		browserHistory.push('/MovieDetails');
	}
	generateMovieListings(){
		
		let movieArr = this.state.movies;
		let array = [];
		
		for(let i = 0; i<movieArr.length; i++){
			array.push(
				<MovieListing key={i} id={i} name={movieArr[i].name} img={movieArr[i].image} desc={movieArr[i].description} />
			);
		}
		this.setState({movieListings: array});
		
	}

}
