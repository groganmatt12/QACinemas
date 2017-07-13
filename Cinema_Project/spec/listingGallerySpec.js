var ListingGallery = require('../src/ListingGallery.jsx');


describe("ListingGallery", function() {
	
	this.reactSuite({type: ListingGallery })
	
	it('should render', function() {
		expect(subject.isMounted()).toBeTruthy();
	});
	
});
