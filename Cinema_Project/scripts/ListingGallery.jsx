import React from 'react';

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
				
				<div>
					{this.state.movieListings}
				</div>
				
			</div>	
		);
		
	}
	
	componentWillMount(){
		this.generateMovieListings();
		
	}
	
	generateMovieListings(){
		
		let array= this.state.movieListings;
		console.log(array[0])
		for(let i=0; i<10; i++){
			array.push(
				<div key={i} style={{backgroundColor:'#00FFFF', width:'auto', height:100}}></div>
				
			);
			
		}
		this.setState({movieListings: array});
		
	}
}