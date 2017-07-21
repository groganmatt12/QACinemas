import React from 'react';

export default class ForumPost extends React.Component{

	render(){
		
		const collapsibleID = "post-"+this.props.postInfo.postid+"-content";
		const collapsiblehref = "#"+collapsibleID;

/*		console.log(collapsiblehref);
		console.log(collapsibleID);*/
/*		const collapsibleRef = "forumPostHeader"+this.props.postInfo.postid;
		console.log(collapsibleRef);*/
		return(
			<div>

				
				<a href={collapsiblehref} className="btn btn-info ForumPost-btn-title" data-toggle="collapse" ref="forumPostHeader_ref">{this.props.postInfo.title}</a>
				<div id={collapsibleID} className="collapse">
					<pre ref="forumPostContent_ref">
					{this.props.postInfo.content}
					</pre>

					<div className="ForumPost-commentMain">
						
					</div>


				</div>

			</div>

		);
	}
}