import React from 'react';

export default class ForumPost extends React.Component{

	render(){
		const collapsiblehref = "#"+collapsiblehref;
		const collapsibleID = "post-"+this.props.postInfo.postid+"-content";
	
/*		console.log(collapsiblehref);
		console.log(collapsibleID);*/
/*		const collapsibleRef = "forumPostHeader"+this.props.postInfo.postid;
		console.log(collapsibleRef);*/
		return(
			<div>
				<div className="row post-main">
					<h3 ref="postTitle">{this.props.postInfo.title}</h3>
				</div>
				
				<a href={collapsiblehref} className="btn btn-info" data-toggle="collapse" ref="forumPostHeader">Post collapsible</a>
				<div id={collapsibleID} className="collapse">
					Helloasdas dasd asd asd
					asdasdasdad
				</div>
			</div>

		);
	}
}