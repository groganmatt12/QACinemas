import React from 'react';
import MovieListing from './MovieListing';

export default class ListOfMovies extends React.Component {

	render() {
		let movieArr = this.props.movies;
		let array = [];
		
		for(let i = 0; i < movieArr.length; i++){
			array.push(
				<MovieListing key={i} id={i} name={movieArr[i].name} img={movieArr[i].image} desc={movieArr[i].description} />
			);
		}

		
		return(
			<div>
				{array}
			</div>
		);
	}	
}