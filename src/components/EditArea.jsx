import React, { useState, useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";


function EditArea(props) {

  const [currentBlog, setBlog] = useState();
  let { id } = useParams();
  let history = useHistory();

  const handleChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlog({ ...currentBlog, [name]: value });
  };

  const onSave = (e) => {
    e.preventDefault();
    let index = props.blog.findIndex((item) => item.id === Number(id));
    let blogCopy = [...props.blog];
    blogCopy[index] = currentBlog;
    props.updateEdit(blogCopy);
    history.push("/displaypost")
  };

  const findEditBlog = () => {
    const index = props.blog.findIndex((item) => item.id == id);
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
    <div className="createArea">

      <input
        name="title"
        type="text"
        onChange={handleChanged}
        value={currentBlog && currentBlog.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        type="text"
        onChange={handleChanged}
        value={currentBlog && currentBlog.content}
        placeholder="Your content here"
        rows="3"
      />
      <button name="addButton" type="submit" onClick={(e) => onSave(e)}>
        Update
      </button>
    </div>
  );
}

export default EditArea;