import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../Hooks/useFetching";
import PostService from "../Components/API/PostService";
import MyLoader from "../Components/UI/Loader/MyLoader";
import CommentsList from "../Components/CommentsList";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, loadingState, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, loadingCommentsState, errorComments] = useFetching(async () => {
        const response = await PostService.getByCommentsByPostId(params.id)
        setComments(response.data)
    })
    console.log(comments)
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            {loadingState
                ?
                <MyLoader/>
                :
                <div>
                    <h1>{post.id}. {post.title}</h1>
                    <h3><i>{post.body}</i></h3>
                </div>
            }
            <h1>Comments:</h1>
            {loadingCommentsState
                ?
                <MyLoader/>
                :
                <CommentsList comments={comments}/>
            }
        </div>
    );
};

export default PostIdPage;