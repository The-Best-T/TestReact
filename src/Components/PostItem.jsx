import React from 'react'
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router";

const PostItem = (props) => {
    const router=useNavigate()
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
                    <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                        Open
                    </MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>
                        Delete
                    </MyButton>
                </div>

            </div>
        </div>
    )
}

export default PostItem