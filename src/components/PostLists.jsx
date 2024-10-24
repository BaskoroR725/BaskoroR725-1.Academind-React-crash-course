import { useState } from 'react';
import Post from "./Posts";
import NewPost from "./NewPost";
import Modal from './Modal';
import classes from "./PostLists.module.css"

function PostList(){
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');
    
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return (
    <>
    <Modal>
        <NewPost 
        onBodyChange={bodyChangeHandler} 
        onAuthorChange={authorChangeHandler}
        />
    </Modal>
        <ul className={classes.posts}>
            <Post author ={enteredAuthor}  body={enteredBody} />
            <Post author ='Mary'  body='I am exciting' />
        </ul>
    </>
)}

export default PostList;