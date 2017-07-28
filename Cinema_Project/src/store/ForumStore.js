import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class ForumStore extends EventEmitter{

    constructor(){
        super();
        this.forumData = [];
        this.commentData = [];
        this.commentsForAPost = [];
        this.filteredPosts = [];
        this.loadPostsFromAPI();
    }

    loadPostsFromAPI(){
        this.forumData = [];
        fetch("/api/posts").then(function(data){
            return data.json();
        }).then( json => {
            json.forEach((post) => {
                //post objects
                //console.log(post);
                this.forumData.push(post);
            });
        });
    }

    getForumData(){
        return this.forumData;
    }

    getCommentData(){
        return this.commentData;
    }

    getComments_Post_Data(){
        return this.commentsForAPost;
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_POST":
                this.createNewPost(action.name, action.title, action.post);
                break;
            case "ADD_REPLY_TO_POST":
                this.addReplyToPost(action.postID, action.replyText);
                break;
            case "GET_COMMENTS_FOR_POST":
                this.getCommentsForAPost(action.postID);
            break;
            case "FILTER_POSTS_ALPHABET":
                this.filterPostsByAlphabet();
            break;
            case "DELETE_COMMENT_BY_ID":
                this.deleteCommentById(action.commentID);
            break;
            case "EDIT_POST_TITLE":
                this.editPostTitle(action.postID, action.inputText);
            break;
            default:
            break;
        }
    }

    editPostTitle(postID, inputText){
        let URL = "/api/posts/"+postID;
        fetch(URL, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: inputText,
            })
            }).then( (res) => {
                console.log("Req success: ", res);
                this.loadPostsFromAPI();
            });
            
            setTimeout(() =>{
                this.emit("postChange");
            },400);
    }
    
    deleteCommentById(commentID){
        let URL="/api/comments/"+commentID;
        //send a delete request, to that url. route will handle it. from response, turn it into json, then use data
        fetch(URL, {
            method: "DELETE",   
        }).then( res => res.json())
        .then((res) => {
            console.log("deleted comment", res);
            this.getCommentsForAPost(res.postid);
            console.log(res.postid);
        });
/*
        setTimeout(() => {
            this.emit("postChange");
        }, 400);*/

    }

    filterPostsByAlphabet(){
        let curPosts = this.forumData;
        let alpArray =  curPosts.sort( (a,b) => {
            return a.name.localeCompare(b.name);
        });
        this.forumData = alpArray;
        
        setTimeout(() => {
            this.emit("forumChange");
        }, 200);
    }

    addReplyToPost(postID, replyText){
        let putURL = "/api/comments/";
        console.log(postID+"+"+replyText);
        fetch(putURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postid: postID,
                name: "Anonymous",
                comment: replyText
            })
            }).then( (res) => {
                console.log("Req success: ", res);
                this.getCommentsForAPost(postID);
            });
        

        setTimeout(() =>{
            this.emit("postChange"); 
        },400);

    }

    getCommentsForAPost(postID){
        this.commentsForAPost = [];
        //goes to the URL. in api.js, we defined this specific url, comments/:id to return comments at that postid.
        let putURL = "/api/comments/"+postID;
        fetch(putURL).then(function(data){
            return data.json();
        }).then( json => {
            json.forEach((comment) => {
                this.commentsForAPost.push(comment);
                console.log(this.commentsForAPost);
            });
        });
        
        setTimeout(() =>{
            this.emit("postChange"); 
        },200);
    }

    createNewPost(pName, pTitle, pPost){
        //POST to api. 
        fetch("/api/posts",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: pName,
                title: pTitle,
                post: pPost
            })
        }).then( (res) => {
            console.log("Req success: ", res);
            this.loadPostsFromAPI();
        });

        setTimeout(() =>{
            this.emit("forumChange");
        },200);
        
    }

    getAllComments(){
        this.commentData = [];
        fetch("/api/comments").then(function(data){
            return data.json();
        }).then( json => {
            json.forEach((comment) => {
                this.allComments.push(comment);
            });
        });
    }

}

const forumStore = new ForumStore();
dispatcher.register(forumStore.handleActions.bind(forumStore));
export default forumStore;

