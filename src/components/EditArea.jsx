import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditArea(props) {
  let { id } = useParams();
  const [currentBlog, setBlog] = useState();
  const [editBlog, setEditBlog] = useState({
    title: "",
    content: "",
  });
  const handleChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditBlog({ editBlog, [name]: value });
  };
  const onSave = (e) => {
    e.preventDefault();
    // props.updateBlog(currentBlog);
  };
  const findEditBlog = () => {
    const index = props.blog.findIndex((item) => item.id == id);
console.log(props.blog[index].title);

    setBlog({
      title: props.blog[index].title,
      content: props.blog[index].content,
    });
  };
  useEffect(() => {
    // Update the document title using the browser API
    findEditBlog();
  },[]);
  return (
    <div className="createArea">
      <input
        name="title"
        type="text"
        onChange={handleChanged}
        value={editBlog.title}
        placeholder="Title"
        defaultValue={currentBlog && currentBlog.title}
      ></input>
      <textarea
        name="content"
        type="text"
        onChange={handleChanged}
        value={editBlog.content}
        defaultValue={currentBlog && currentBlog.content}
        placeholder="Your content here"
        rows="3"
      ></textarea>
      <button name="addButton" type="submit" onClick={(e) => onSave(e)}>
        Update
      </button>
    </div>
  );
}

export default EditArea;
