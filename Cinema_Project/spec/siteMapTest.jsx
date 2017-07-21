import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import SiteMap from '../src/SiteMap';

describe('siteMap:', function(){
	
	var siteMap = TestUtils.renderIntoDocument(
			<SiteMap />
		);
		
	it('\nRenders a paragraph', function(){

		var paragraph = siteMap.refs.SiteMapParagraph1;
		
		expect(ReactDOM.findDOMNode(paragraph).textContent).toEqual("Site Map:");
	});
	
	it('\nTesting a Link - Listing Gallery', function(){

		var link = siteMap.refs.SiteMapLinkToListingGallery;
		
		expect(ReactDOM.findDOMNode(link).textContent).toEqual("Listing Gallery");
		//expect(ReactDOM.findDOMNode(link)).toEqual("/ListingGallery");
	});
	
	it('\nTesting a Link - Classification', function(){

		var link = siteMap.refs.SiteMapLinkToClassification;
		
		expect(ReactDOM.findDOMNode(link).textContent).toEqual("Classifications");

	});
});