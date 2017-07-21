import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ForumPost from '../src/ForumPost';
import CinemaStore from '../src/store/CinemaStore';

describe('forumPost:', function(){
	
	const arrayOfPosts = CinemaStore.getAllForumPosts();

	let forumPost = TestUtils.renderIntoDocument(
		<ForumPost postInfo={arrayOfPosts[0]} />
	);

	it('\nRenders a forum topic in the list', function(){

		var forumTopicPost = forumPost.refs.forumPostHeader;
		
		expect(ReactDOM.findDOMNode(forumTopicPost).textContent).toEqual("Post collapsible");
	});
	
	it("\nRenders post title", function(){

		for(let i = 0; i<arrayOfPosts.length; i++){

			let forumPost2 = TestUtils.renderIntoDocument(
				<ForumPost postInfo={arrayOfPosts[i]} />
			);

			let forumPostTitle = forumPost2.refs.postTitle;
			let curTitle = arrayOfPosts[i].title;
			

			console.log(curTitle);
			expect(ReactDOM.findDOMNode(forumPostTitle).textContent).toEqual(curTitle);
		}

	});

});