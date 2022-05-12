import './Styles/App.css'
import {useState} from "react";
import PostsList from "./Components/PostsList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/Select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description1'},
        {id: 2, title: 'C#', body: 'Description2'},
        {id: 3, title: 'C++', body: 'Description3'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (oldPost) => {
        setPosts(posts.filter(post => post.id !== oldPost.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultOption="Sort"
                    options={[
                        {value: 'title', name: 'By title'},
                        {value: 'body', name: 'By description'}
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostsList remove={removePost} posts={posts} title={'List of posts'}/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Posts not found
                </h1>
            }

        </div>
    )
}

export default App
