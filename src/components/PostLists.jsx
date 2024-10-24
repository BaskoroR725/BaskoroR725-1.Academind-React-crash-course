import Post from "./Posts";
import NewPost from "./NewPost";
import classes from "./PostLists.module.css"

function PostList(){
    return (
    <>
    <NewPost/>
        <ul className={classes.posts}>
            <Post author ='I am Baskoro'  body='React.js is awesome!!' />
            <Post author ='I am Basran'  body='Its so exciting!!' />
        </ul>
    </>
)}

export default PostList;