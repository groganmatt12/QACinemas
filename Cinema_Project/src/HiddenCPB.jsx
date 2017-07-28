import React from 'react';
import * as ForumActions from './actions/ForumActions';

export default class HiddenCPB extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            title: "",
            post: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.name);
        const name = this.state.name;
        const title = this.state.title;
        const post = this.state.post;

        ForumActions.createNewPost(name, title, post);
        /*this.createNewPost(name, title, post);*/
        this.setState({
            name: "",
            title: "",
            post: "",
        });
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value}, () => {

        });
    }



    render(){
        return(
            <form className="HCP" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group row">
                    <label htmlFor="HCP-name" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
                    <div className="col-sm-10">
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control form-control-sm" id="HCP-name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="HCP-title" className="col-sm-2 col-form-label col-form-label-sm">Title</label>
                    <div className="col-sm-10">
                        <input type="text" value={this.state.title} onChange={this.handleChange} name="title" className="form-control form-control-sm" id="HCP-title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="HCP-post" className="col-sm-2 col-form-label col-form-label-sm">Post</label>
                    <div className="col-sm-10">
                        <textarea rows="2" value={this.state.post} onChange={this.handleChange} name="post" className="form-control form-control-sm" id="HCP-post" />
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary btn-sm">Post</button>
            </form>

        );
    }

}
