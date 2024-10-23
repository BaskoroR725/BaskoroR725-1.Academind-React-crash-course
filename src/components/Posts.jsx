import classes from './Posts.module.css'

function Post(props){
    return (
        <div className = {classes.post}>
            <p className ={classes.author}>{props.author}</p>
            <p classNames = {classes.body}>{props.body}</p>
        </div>
    );
}

export default Post;