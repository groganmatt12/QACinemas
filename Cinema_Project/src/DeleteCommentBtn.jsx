import React from 'react';
import * as ForumActions from './actions/ForumActions';

export default class DeleteCommentBtn extends React.Component{

	onClick(){
		console.log(this.props.commentID);
		ForumActions.deleteCommentById(this.props.commentID);
	}
	
	render(){
		return(
			<div>
				<button type="button" className="btn btn-danger btn-sm" onClick={this.onClick.bind(this)}>delete</button>
			</div>
		);
	}
}