/*
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Booking from '../src/Booking';
import CinemaStore from '../src/store/CinemaStore';

describe('footer:', function(){
	var pageProps = {
		params:{
			showingID: "1",
			location: "test",
			movieID: "1"
		}
	};
	
	var booking = TestUtils.renderIntoDocument(
			<Booking params={pageProps}/>
		);
	
	it('\nRender Team Name In Footer', function(){

		let reference = Booking.refs.Booking_LocationParagraph;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("Time: test");
		
	});	
	
});
*/