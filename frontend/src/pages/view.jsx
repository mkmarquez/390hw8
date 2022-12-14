import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export function View() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async function () {
      const req = await fetch("http://localhost:3000/blog/");
      const json = await req.json();
      setPosts(json);
    })();
  }, []);
  return (
    <div>
      <div><a href="/">
        <button style={{fontSize: 20}}>Home</button>
      </a></div>
      <div><a href="/update">
        <button style={{fontSize: 20}}>Update a Blog</button>
      </a></div>
      <div><a href="/delete">
        <button style={{fontSize: 20}}>Delete a Blog</button>
      </a></div>
      <div>
        {posts.map((post) => (
          <div
            style={{
              border: "2px solid",
              width: "50vw",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <h2 style={{margin: "0.2rem"}}>{post.title}</h2>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
