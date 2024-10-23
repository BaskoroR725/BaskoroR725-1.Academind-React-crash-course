import classes from "./Posts.module.css"

function Post(props){
    return (
        <div className ={classes.post}>
            // eslint-disable-next-line react/prop-types
            <p className ={classes.author}>{props.author}</p>
            <p className ={classes.body}>{props.body}</p>
        </div>
    );
}

export default Post;