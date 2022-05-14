import React from 'react';

const CommentItem = (props) => {
    return (
        <div>
            <div className="comment">
                <strong>{props.comment.email}</strong>
                <div>
                    {props.comment.body}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;