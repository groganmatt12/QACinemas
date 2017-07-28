import React from 'react';
import HiddenCPB from './HiddenCPB';
import ForumStore from './store/ForumStore';
import { Link } from 'react-router';
import Sortbar from './Sortbar';
import * as ForumActions from './actions/ForumActions';

export default class Forum extends React.Component{

    constructor(){
        super();
        this.state = {
            isCPBHidden: false,
            forumData: [],
            postsArrayDOM: [],
            sortOption: "select"
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount(){
        /*ForumStore.loadPostsFromAPI();*/
        //this.getPostsAPIAndRender();
        ForumStore.on("forumChange", this._onChange);
    }
    /*SUPER IMPORTANT TO NOTICE STATE CHANGE>> PLACE AJAX CALLS INSIDE Comp.DidMount!!!*/
    componentDidMount(){
        this.getPostsAPIAndRender();
    }

    componentWillUnmount(){
        ForumStore.removeListener("forumChange", this._onChange);
    }

    _onCPBClick(){
        this.setState({isCPBHidden: !(this.state.isCPBHidden)});
    }

    _onPostSubmit(){
        console.log("form submitted");
    }

    getPostsAPIAndRender(){
        let postsFromAPI = ForumStore.getForumData();
        this.setState({forumData: postsFromAPI});

        let reqPostArray = [];
        for(let i = 0; i<postsFromAPI.length; i++){
            let curPostTitle = postsFromAPI[i].title;
            let curName = postsFromAPI[i].name;
            let curPostID = postsFromAPI[i]._id;
            reqPostArray.push(
                <div className="panel panel-default forum-postCards" key={curPostID}>
                    <div className="panel-body">
                        <Link to={"/Forum/"+curPostID} style={{textDecoration: 'none'}} >
                            <p className="panel-heading forum-postTitle">{curPostTitle}</p>
                        </Link>
                        <p className="panel-body forum-postUser">{curName}</p>
                    </div>
                </div>
            );
        }
        this.setState({postsArrayDOM: reqPostArray});
    }

    _onChange(){
        /*this.setState({ forumData: ForumStore.getForumData() });*/
        this.getPostsAPIAndRender();
        console.log("event captured. re-render posts");
    }    

    _handleSortPosts(ddOption){
        this.setState({sortOption: ddOption});
        if(ddOption === "User"){
            ForumActions.filterPostsByAlphabet();
        }
        if(ddOption === "Date"){

        }
    }

    render(){
        const showCPB = this.state.isCPBHidden;

        return(
            <div className="container-fluid forum-main">
                <div className="forum-banner">
                    <div className="row forum-h1">
                        <button type="button" className="btn btn-warning" onClick={this._onCPBClick.bind(this)}>Create a Post!</button>
                    </div>
                    <div className="row"> 
                        <div className="col-md-4">
                            Post as user:
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/*Drop down, create new post*/}
                            {showCPB ? (
                                <HiddenCPB handleFormSubmit={this._onPostSubmit.bind(this)} posts={this.state.forumData}/>
                            ) : (
                                null
                            )}
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

                <div className="forum-postsBody col-sm-10">
                    {/* {this.state.forumData}*/}
                    <div className="panel panel-default">
                        <div className="panel-body h-20">
                        <div className="col-sm-11">
                            Discussions
                        </div>
                        <div className="col-sm-1">
                            <Sortbar ddState={this.state.sortOption} handleddChange={this._handleSortPosts.bind(this)}/>
                        </div>
                        </div>
                    </div>
                    {this.state.postsArrayDOM}
                </div>
                <div className="col-sm-2">

                </div>

            </div>
        );
    }

}
