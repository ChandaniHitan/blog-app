import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateArea from "./Pages/CreateArea";
import BlogPost from "./Pages/BlogPost";
import EditArea from "./components/EditArea";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [blogs, setBlogs] = useState([]);

  const submitBlog = (blog) => {
    console.log(blog);

    setBlogs([
      ...blogs,
      {
        id: blogs.length + 1,
        title: blog.title,
        content: blog.content,
      },
    ]);
  };

  const deleteBlog = (id) => {
    console.log(id);
    const deleted = blogs.filter((item) => item.id !== id);
    setBlogs(deleted);
    console.log(deleted, "This is deleted", { deleted });
  };

  // console.log(blogs);

  // const updateEdit = (id, currentBlog) => {
  //   let index = blogs.findIndex((item) => item.id === id);
  //   let blogCopy = [...blogs];
  //   blogCopy[index] = currentBlog;
  //   setBlogs(blogCopy);

  //   setEdited(false);
  // };

  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          component={() => <CreateArea submitBlog={submitBlog} />}
        />

        <Route
          path="/displaypost"
          component={() =>
            blogs.map((blogs) => (
              <BlogPost
                id={blogs.id}
                title={blogs.title}
                content={blogs.content}
                deleteBlog={deleteBlog}
                {...props}
              />
            ))
          }
        />  <Route
          path="/edit/:id"
          component={() =>
              <EditArea
              blog={blogs}
              {...props}
              />
           
          }
        />

      </div>
    </Router>
  );
}

export default App;
