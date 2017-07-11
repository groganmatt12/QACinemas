import React from 'react';
import movieJson from './data/MovieDetails.json';
import MovieListing from './MovieListing';
import {Link, browserHistory} from 'react-router';

export default class ListingGallery extends React.Component{
	constructor(props){
		super(props);
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
	pagechange(){
		browserHistory.push('/MovieDetails');
	}
	generateMovieListings(){
		
		let movieArr = movieJson.movieDetails;
		let array = this.state.movieListings;
		
		for(let i = 0; i<movieArr.length; i++){
			array.push(
				<MovieListing key={i} id={i} name={movieArr[i].name} img={movieArr[i].image} desc={movieArr[i].description} />
			);
		}
		this.setState({movieListings: array});
		
	}

}
