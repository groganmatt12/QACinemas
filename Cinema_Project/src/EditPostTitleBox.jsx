import React from 'react';
import * as ForumActions from './actions/ForumActions';

export default class EditPostTitleBox extends React.Component{
	
	constructor(){
		super();
		this.state = {
			inputText: ""
		};
	}

	handleSubmitReply(e){
		e.preventDefault();
        const inputText = this.state.inputText;
        ForumActions.editPostTitle(this.props.postID, inputText);
        this.setState({inputText: ""});
	}

	handleInputChange(e){
		const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmitReply.bind(this)}>
					<input type="text" name="inputText" onChange={this.handleInputChange.bind(this)} value={this.state.inputText}/>
                    <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
				</form>
			</div>
		);
	}
}