import React from 'react'
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="postContent">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="postBtn">
                    <MyButton onClick={() => props.remove(props.post)}>
                        Delete
                    </MyButton>
                </div>

            </div>
        </div>
    )
}

export default PostItem