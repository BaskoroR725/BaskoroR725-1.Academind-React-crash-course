import { useState, useEffect } from "react";

import Post from './Posts'
import NewPost from "./NewPost";
import Modal from './Modal';
import classes from "./PostLists.module.css"

function PostList({isPosting, onStopPosting}){
    const [posts, setPosts] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false); 
        }
        
        fetchPosts();
    },[]);
    
    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPost) => [postData, ...existingPost])
    }

    return (
    <>
    {isPosting ? (
        <Modal onClose={onStopPosting}>
            <NewPost 
            onCancel={onStopPosting}
            onAddPost = {addPostHandler}
            />
        </Modal> 
    ) : null}

    {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post) => <Post key={post.body} author = {post.author} body={post.body} />)}
        </ul>
    )}

    {!isFetching && posts.length === 0 && (
        <div style={{textAlign:'center', color:'white'}}>
            <h2>There are no post yet.</h2>
            <p>Start adding some post </p>
        </div>
    )}
    {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
            <p>Loading posts...</p>
        </div>
    )}
    </>
)}

export default PostList;