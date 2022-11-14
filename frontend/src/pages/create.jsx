import { useState } from "react";
import { Link } from "react-router-dom";
//import { useEffect } from "react";
//import { BlogModel } from "../../../backend/schema/blog";
//import express from "express";
//import router from "../../../backend/routes/blog.js";



export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({ title, content });
    const headers = { "content-type": "application/json" };


    //useEffect(() => {
    async function getResponse() {
      const response = await fetch('http://localhost:3000/blog/create-post', { method: 'POST', body: requestData, headers });
      await response.json();
      setDone(true)
    }

    getResponse();


    console.log(title);

    

  }
  if (done) {
    return (
      <div>
        <Link to="/view">Check out your blog post</Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Link to="/"> Home</Link>
      </div>

      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <button>Post</button>
    </form>
  );
}
