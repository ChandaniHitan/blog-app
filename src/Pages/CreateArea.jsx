import React, { useState } from "react";

function CreateArea(props) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const handleChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlog({ ...blog, [name]: value });
  };
  const saveHandealer = (e) => {
    e.preventDefault();

    props.submitBlog(blog);
    setBlog({
      title: "",
      content: "",
    });
  };
  return (
    <div className="createArea">
      <input
        name="title"
        type="text"
        onChange={handleChanged}
        value={blog.title}
        placeholder="Title"
      ></input>
      <textarea
        name="content"
        type="text"
        onChange={handleChanged}
        value={blog.content}
        placeholder="Your content here"
        rows="3"
      ></textarea>
      <button name="addButton" type="submit" onClick={(e) => saveHandealer(e)}>
        Add
      </button>
    </div>
  );
}

export default CreateArea;
