import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Forum from '../src/Forum';

describe('forum:', function(){

		var forum = TestUtils.renderIntoDocument(
			<Forum />
		);

		it("\nRender text in top banner", function(){
			let reference = forum.refs.ForumParagraph1;
			expect(ReactDOM.findDOMNode(reference).textContent).toEqual("Ask a question!");
		});
});