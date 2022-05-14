import React from 'react';
import CommentItem from "./CommentItem";

const CommentsList = ({comments}) => {
    if (!comments.length)
        return (
            <h1 style={{textAlign: 'center'}}>
                Comments not found
            </h1>
        )

    return (
        <div>
            {comments.map(comment =>
                <CommentItem key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export default CommentsList;