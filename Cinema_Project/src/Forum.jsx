import React from 'react';
import CinemaStore from './store/CinemaStore';
import HiddenCreatePostBanner from './HiddenCreatePostBanner';
import ForumPost from './ForumPost';

export default class Forum extends React.Component{

	constructor(){
		super();
		this.state ={
			postArray: [],
			showHiddenCreatePost: false,
			commentArray: []
		};
	}

	_onButtonClick(){
		console.log("hello world");
		this.setState({showHiddenCreatePost: !(this.state.showHiddenCreatePost)});
	}

	componentWillMount(){
		this.generatePosts();
	}

	generatePosts(){
		//generate row-post-row
		const arrayOfPosts = CinemaStore.getAllForumPosts();
		let updatePostArray = [];

		for(let i = 0; i<arrayOfPosts.length; i++){
			let curPostObj = arrayOfPosts[i];

			updatePostArray.push(
				<tr key={i}>
						<td>
							<ForumPost key={curPostObj.postid} postInfo={curPostObj}/>
						</td>
						<td>post {curPostObj.postid}</td>
						<td>---</td>
				</tr>
				);
		}

		this.setState({postArray: updatePostArray});
	}

	render(){
		const showHCP = this.state.showHiddenCreatePost;

		return(
			<div className="container">

				<div className="panel panel-default" ref="writePost">
					<div className="panel-body">
						<p ref="ForumParagraph1">Ask a question!</p>
						<button type="button" className="btn btn-default" onClick={this._onButtonClick.bind(this)}>Make a post</button>
					</div>
				</div>
				
				<div>
					{showHCP ? ( 
						<HiddenCreatePostBanner />
						) : (
						null
						)}
				</div>

				<div className="forum_style">
					<table className="forum_table_style" ref="forumTable1">
						{this.state.postArray}
					</table>
				</div>

			</div>
		);
	}


}