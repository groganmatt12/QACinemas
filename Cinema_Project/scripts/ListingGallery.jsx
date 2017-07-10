import React from 'react';
import movieJson from '../data/MovieDetails.json';
import MovieListing from './MovieListing';

export default class ListingGallery extends React.Component{
	constructor(){
		super();
		this.state={
			movieListings:[]
		};
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
		this.generateMovieListings();
		
	}
	
	generateMovieListings(){
		
		let movieArr = movieJson.movieDetails;
		let array = this.state.movieListings;
		
		for(let i = 0; i<movieArr.length; i++){
			array.push(
				<MovieListing key={i} name={movieArr[i].name} img={movieArr[i].image} desc={movieArr[i].description} />
			);
		}
		this.setState({movieListings: array});
		
	}

}