import React from 'react';
import * as ForumActions from './actions/ForumActions';

export default class ReplyBox extends React.Component{
    
    constructor(){
        super();
        this.state = {
            replyText: ""
        };
        this.handleSubmitReply = this.handleSubmitReply.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmitReply(e){
        e.preventDefault();
        const replyText = this.state.replyText;
        ForumActions.addReplyToPost(this.props.postID, replyText);
        this.setState({replyText: ""});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmitReply}>
                <div className="form-group Reply-form">
                    <label htmlFor="reply-post" className="col-form-label-sm">Send a reply: </label>
                    <textarea  value={this.state.replyText} onChange={this.handleChange} name="replyText" className="form-control" id="reply-post" />
                </div>
                    <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
            </form>
        );
    }

}
