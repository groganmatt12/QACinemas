import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Footer from '../src/Footer';

describe('footer:', function(){
	
	var footer = TestUtils.renderIntoDocument(
			<Footer />
		);
		
		//pull inner tag from tag. I.E. href from <a>
		
	it('\nRender Team Name In Footer', function(){

		let reference = footer.refs.Footer_Team_Name;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("QA Cinema Blue");
		
	});	
		
	it('\nRender Email In Footer', function(){

		let reference = footer.refs.Footer_Email;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("cinemasqa@gmail.com");
		expect(ReactDOM.findDOMNode(reference).href).toEqual("mailto:cinemasqa@gmail.com?Subject=Hello");
	});
	
	
	it('\nRender Phone Number In Footer', function(){

		let reference = footer.refs.Footer_PhoneNumber;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("06412303344");
		expect(ReactDOM.findDOMNode(reference).href).toEqual("tel:06412303344");
	});				
		
	it('\nRender Paragraph In SiteMap Through Footer', function(){

		let siteMapCall = footer.refs.Footer_SiteMapCall;
		
		let reference = siteMapCall.refs.SiteMapParagraph1;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("Site Map:");
	});
	
	
});