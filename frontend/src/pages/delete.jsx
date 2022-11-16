import { useState } from "react";
import { Link } from "react-router-dom";



export function Delete() {
    const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({ title });
    const headers = { "content-type": "application/json" };

    async function getResponse() {
      const response = await fetch('http://localhost:3000/blog/remove-post', { method: 'POST', body: requestData, headers });
      await response.json();
      setDone(true)
    }

    getResponse();

  }
  if (done) {
    return (
      <div>
        <a href="/view">
        <button style={{fontSize: 20}}>Blog Deleted!</button>
      </a>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>

        <div>What is the title of the blog you want to delete?</div>
      
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      
      <button>Delete</button>
    </form>
  );
}
