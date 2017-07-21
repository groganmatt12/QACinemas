import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import MovieDetails from '../src/MovieDetails';

describe('movieDetails:', function(){
	
	var pageProps = {
		key: 0
		
	};
	
	var movieDetails = TestUtils.renderIntoDocument(
			<MovieDetails params={pageProps}/>
		);
	
	
	it('\n', function(){

		let reference = movieDetails.refs.MovieDetails_FilmTitle;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("Movie Name: High School Musical");
		
		let reference2 = movieDetails.refs.MovieDetails_FilmInfo;
		
		expect(ReactDOM.findDOMNode(reference2).textContent).toEqual("Movie Info: On Easter Eve in 2006, high school juniors Troy Bolton (Zac Efron) and Gabriella Montez (Vanessa Hudgens) meet at a party while both teens are at a ski lodge during winter break. At the party, the two are called upon to sing karaoke together. They find that they have a connection and decide to exchange numbers before going their separate ways.");

		
	});	
	
});        

