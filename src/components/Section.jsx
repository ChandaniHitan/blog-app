import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
function Section(props) {
    const [currentBlog, setBlog] = useState();
    const url = `edit/${props.id}`
    let { id } = useParams();
    let history = useHistory();
    const findEditBlog = () => {
        const index = props.blog.findIndex((item) => item.id === Number(id));
        setBlog({
            id: Number(id),
            title: props.blog[index].title,
            content: props.blog[index].content,
        });
    };
    useEffect(() => {
        // Update the document title using the browser API
        findEditBlog();
    }, []);

    return (
        <div className="blogArea">
            <h1>{currentBlog && currentBlog.title}</h1>
            <p>{ currentBlog &&currentBlog.content}</p>
            <Link to={url}>    <button >Edit</button></Link>
        </div>
    );
}
export default Section;



