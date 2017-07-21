import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Forum from '../src/Forum';

describe('forum:', function(){

	
	var forum = TestUtils.renderIntoDocument(
			<Forum />
		);
		
	it('\nRenders a table', function(){

		var forumTable = forum.refs.forumTable1;
		
		expect(ReactDOM.findDOMNode(forumTable).className).toEqual("forum_table_style");
	});
	
	it('\nTesting a post function', function(){

		var postFunction = forum.refs.writePost;
		
		expect(ReactDOM.findDOMNode(postFunction).className).toEqual("panel panel-default");
	}); 
	

});