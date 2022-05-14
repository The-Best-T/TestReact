import '../Styles/App.css'
import {useEffect, useState} from "react";
import {usePost} from "../Hooks/usePosts";
import {useFetching} from "../Hooks/useFetching";
import PostService from "../Components/API/PostService";
import {getPageCount} from "../Utils/pages";
import MyModal from "../Components/UI/Modal/MyModal";
import PostForm from "../Components/PostForm";
import PostFiler from "../Components/PostFilter";
import MyButton from "../Components/UI/Button/MyButton";
import MyLoader from "../Components/UI/Loader/MyLoader";
import MyPagination from "../Components/UI/Pagination/MyPagination";
import PostsList from "../Components/PostsList";


function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

    const [fetchPosts, loadingState, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = +response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }

    const removePost = (oldPost) => {
        setPosts(posts.filter(post => post.id !== oldPost.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModalVisible(true)}>
                Create Post
            </MyButton>

            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFiler style={{marginTop: '30px'}}
                       filter={filter}
                       setFilter={setFilter}
            />
            {postError &&
                <h1 style={{textAlign: 'center'}}>Error : {postError}
                </h1>
            }

            {loadingState
                ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <MyLoader/>
                </div>
                :
                <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts'}/>
            }
            <MyPagination
                page={page}
                totalPages={totalPages}
                changePage={setPage}
            />
        </div>
    )
}

export default Posts
