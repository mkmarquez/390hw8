import { useState } from "react";
import { Link } from "react-router-dom";



export function Update() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({ title, content });
    const headers = { "content-type": "application/json" };

    async function getResponse() {
      const response = await fetch('http://localhost:3000/blog/update-post', { method: 'POST', body: requestData, headers });
      await response.json();
      setDone(true)
    }

    getResponse();

  }
  if (done) {
    return (
      <div>
        <a href="/view">
        <button style={{fontSize: 20}}>Blog Updated!</button>
      </a>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>

        <div>What is the title of the blog you want to update?</div>
      
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />

        <div>What do you want the blog's new content to be?</div>
      
      <input
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      
      <button>Update</button>
    </form>
  );
}
