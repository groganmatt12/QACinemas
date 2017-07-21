import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ForumPost from '../src/ForumPost';
import CinemaStore from '../src/store/CinemaStore';

describe('forumPost:', function(){
	
	const arrayOfPosts = CinemaStore.getAllForumPosts();
	const arrayOfComments = CinemaStore.getAllForumComments();

	let forumPost = TestUtils.renderIntoDocument(
		<ForumPost postInfo={arrayOfPosts[0]} />
	);

	
	it("\nRenders post title", function(){

		for(let i = 0; i<arrayOfPosts.length; i++){

			let forumPost2 = TestUtils.renderIntoDocument(
				<ForumPost postInfo={arrayOfPosts[i]} />
			);


			let forumPostTitle = forumPost2.refs.forumPostHeader_ref;
			let curTitle = arrayOfPosts[i].title;
			console.log(curTitle);
			expect(ReactDOM.findDOMNode(forumPostTitle).textContent).toEqual(curTitle);

			let curPostContent = arrayOfPosts[i].content;
			let forumPostContent = forumPost2.refs.forumPostContent_ref;
			expect(ReactDOM.findDOMNode(forumPostContent).textContent).toEqual(curPostContent);

		}

	});

	it('\nTest to render comments for posts', function(){
		for(let i = 0; i<arrayOfComments.length; i++){
			let forumComment = TestUtils.renderIntoDocument(
					<Comment commentInfo={arrayOfComments[i]} />
			);

			console.log(arrayOfComments);
			let curComment = arrayOfComments[i].comment;
			let forumCommentContent forumComment.refs.forumCommentContent_ref;

			expect(ReactDOM.findDOMNode(forumCommentContent).textContent).toEqual(curComment);
		}

	}
});