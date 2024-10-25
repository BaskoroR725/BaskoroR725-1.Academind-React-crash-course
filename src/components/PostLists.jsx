import { useLoaderData } from "react-router-dom";

import Post from './Post'
import classes from "./PostLists.module.css"

function PostList(){
    const posts = useLoaderData();
    
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
    {posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post) => <Post key={post.body} author = {post.author} body={post.body} />)}
        </ul>
    )}

    { posts.length === 0 && (
        <div style={{textAlign:'center', color:'white'}}>
            <h2>There are no post yet.</h2>
            <p>Start adding some post </p>
        </div>
    )}
    </>
)}

export default PostList;