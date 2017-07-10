import React from 'react';
import movieJson from '../data/MovieDetails.json';
import MovieListing from './MovieListing';

export default class ListingGallery extends React.Component{
	constructor(){
		super();
		this.state={
			movieListings:[]
		}
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
				<MovieListing name={movieArr[i].name} image={movieArr[i].image} desc={movieArr[i].description} />
			);
		}
/* 
		let movieArr = movieJson.movieDetails;
		let array = this.state.movieListings;
		
		for(let i = 0; i<movieArr.length; i++){
			array.push(
				<div className="row" key={i} >
					<div className="col-sm-4" id="imgName1">
						<div id="movImage">
						{movieArr[i].image}
						</div>
						<div id="movName">
						{movieArr[i].name}
						</div>
						
					</div>
					<div className="col-sm-8" id="movDesc1">
						{movieArr[i].description}
					</div>
					
				</div>
			);
		} */
		
		
		
		
		
	}
			/* 	let array= this.state.movieListings;
		console.log(array[0])
		for(let i=0; i<10; i++){
			array.push(
				<div key={i} style={{backgroundColor:'#00FFFF', width:'auto', height:100}}></div>
				
			);
			
		}
		this.setState({movieListings: array});
		
	} */

}