import React from 'react'
import {Link} from "react-router-dom"
function BlogPost(props) {
console.log("this is props",props);
const editUrl = `edit/${props.id}`
const viewUrl = `view/${props.id}`
    return (
        <Link to ={viewUrl}>
        <div className="blogArea">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>props.deleteBlog(props.id)}>Delete</button>
            <Link to= {editUrl}>    <button >Edit</button></Link>
        </div>
        </Link>
    );
}
export default BlogPost;