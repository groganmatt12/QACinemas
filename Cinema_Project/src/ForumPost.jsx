import React from 'react';

export default class ForumPost extends React.Component{

	render(){
		return(
			<div>

				<div className="row post-main">
					Post title + post content here
				</div>
					
				<a href="#post0comment" className="btn btn-info" data-toggle="collapse">Comment collapsible</a>
				  <div id="post0comment" className="collapse">
				    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
				    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				  </div>
			</div>

		);
	}
}