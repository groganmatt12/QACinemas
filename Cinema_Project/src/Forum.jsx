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

	}

	render(){
		const showHCP = this.state.showHiddenCreatePost;

		return(
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-body">
						Ask a question!
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
					<table className="forum_table_style">
					  <tr>
						<th>Company</th>
						<th>Contact</th>
						<th>Country</th>
					  </tr>
					  <tr>
						<td>Alfreds Futterkiste
							
						 </td>
						<td>Maria Anders</td>
						<td>Germany</td>
					  </tr>
					  <tr>
					  </tr>
					</table>
				</div>
			</div>
		);
	}


}