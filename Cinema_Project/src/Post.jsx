import React from 'react';
import * as ForumActions from './actions/ForumActions';
import ForumStore from './store/ForumStore';
import ReplyBox from './ReplyBox';
import DeleteCommentBtn from './DeleteCommentBtn';
import EditPostTitleBox from './EditPostTitleBox';

export default class Post extends React.Component{

    constructor(){
        super();	
        this.state = {
            pTitle: "",
            pAuth: "",
            pPost: "",
           /* forumData : [],*/
            postData : [],
            commentArray : [],
            commentDomObj: [],
            postDomObj: []
        };
        this._onChange = this._onChange.bind(this);
        //old
        //ForumStore.on("postChange", this._onChange); 
    }

    _onChange(){
        this.getPostAndComments();
    }    

    componentWillMount(){
        ForumStore.on("postChange", this._onChange);
        //ForumActions.getCommentsForAPost(this.props.params.id);
    }

    componentWillUnmount(){
        ForumStore.removeListener("postChange", this._onChange);
    }

    componentDidMount(){
        /*this._onChange();*/
        //Action dispatched after DOM renders. this triggers an onchange event resulting in state change as data pulled from flux store has changed!!!
        ForumActions.getCommentsForAPost(this.props.params.id);
    }

    _handleDeleteButton(){

    }

    getPostAndComments(){
        let postsFromAPI = ForumStore.getForumData();

        postsFromAPI.forEach( (curPost) => {
            let curID = curPost._id;
            if(curID == this.props.params.id){
                this.setState({pTitle: curPost.title});
                this.setState({pAuth: curPost.name});
                this.setState({pPost: curPost.post});
            }
        });

        let commentsFromAPI = ForumStore.getComments_Post_Data();
/*        console.log("post");
        console.log(commentsFromAPI);*/

        let reqCommentDOM = [];
        commentsFromAPI.forEach( (curCom) => {
        let curID = curCom._id;
          reqCommentDOM.push(
                <div className="row card Post-individual" key={curCom._id}>
                    <div className="card-block row">
                        <div className="col-sm-1 Post-username">
                            <p>{curCom.name}</p>
                        </div>
                        <div className="col-sm-9">
                            {curCom.comment}
                        </div>
                        <div className="col-sm-2">
                            <DeleteCommentBtn commentID={curID}/>
                        </div>
                    </div>
                </div>

        );
      });
        this.setState({commentDomObj: reqCommentDOM});
    }

    render(){
        //const postTitle = this.state.pTitle;
        const postAuth = this.state.pAuth;
        const postCont = this.state.pPost;

        return(
            <div className="container-fluid post-main">
                <div className="Post-Header">
                    <div className="row">
                        <div className="col-sm-1">
                            <p className="Post-username">{postAuth}</p>
                        </div>
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <h1>{this.state.pTitle}</h1>
                                <EditPostTitleBox postID={this.props.params.id} />
                            </div>
                            <div className="row">
                                <p>{postCont}</p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        <hr/>
                    </div>
                    <hr />
                </div>

                <div className="Post-comments">
                    {this.state.commentDomObj}
                </div>
                    
                <div className="row">
                    <ReplyBox postID={this.props.params.id} />
                </div>
            </div>
        );
    }
}
