import dispatcher from '../store/dispatcher';

export function filterPostsById(postID) {
    dispatcher.dispatch({
        type: "GET_POST",
        postID,
    });
}

export function filterCommentsByPost(genreArray){
	dispatcher.dispatch({
		type: "GENRE_SEARCH",
		genreArray,
	});
}

export function createNewPost(name, title, post){
	dispatcher.dispatch({
		type: "CREATE_POST",
		name,
		title,
		post,
	});
}

export function addReplyToPost(postID, replyText){
    dispatcher.dispatch({
        type: "ADD_REPLY_TO_POST",
        postID,
        replyText,
    });
}

export function getCommentsForAPost(postID){
    dispatcher.dispatch({
        type: "GET_COMMENTS_FOR_POST",
        postID,
    });
}

export function filterPostsByAlphabet(){
    dispatcher.dispatch({
        type: "FILTER_POSTS_ALPHABET",
    });
}

export function deleteCommentById(commentID){
    dispatcher.dispatch({
        type: "DELETE_COMMENT_BY_ID",
        commentID,
    })
}

export function editPostTitle(postID, inputText){
    dispatcher.dispatch({
        type: "EDIT_POST_TITLE",
        postID,
        inputText,
    })
}

