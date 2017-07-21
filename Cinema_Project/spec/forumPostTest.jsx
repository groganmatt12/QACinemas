import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ForumPost from '../src/ForumPost';

describe('forumPost:', function(){
	
	var forumPost = TestUtils.renderIntoDocument(
			<ForumPost />
		);
		
	it('\nRenders a forum topic in the list', function(){

		var forumTopicPost = forumPost.refs.forumPostHeader;
		
		expect(ReactDOM.findDOMNode(forumTopicPost).textContent).toEqual("Comment collapsible");
	});
	
});