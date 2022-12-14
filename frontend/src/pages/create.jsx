import { useState } from "react";
import { Link } from "react-router-dom";



export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({ title, content });
    const headers = { "content-type": "application/json" };

    async function getResponse() {
      const response = await fetch('http://localhost:3000/blog/create-post', { method: 'POST', body: requestData, headers });
      await response.json();
      setDone(true)
    }

    getResponse();

  }
  if (done) {
    return (
      <div>
        <a href="/view">
        <button style={{fontSize: 20}}>Check out your blog post!</button>
      </a>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      

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
