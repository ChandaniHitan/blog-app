import React from 'react'
import {Link} from "react-router-dom"
function BlogPost(props) {
console.log("this is props",props);
const url = `edit/${props.id}`
    return (
        <div className="blogArea">
        
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>props.deleteBlog(props.id)}>Delete</button>
            <Link to= {url}>    <button >Edit</button></Link>
        </div>
    );
}
export default BlogPost;