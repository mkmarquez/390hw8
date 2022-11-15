import { Link } from "react-router-dom";

export function Index() {
  return (
    <div>
      <div style={{ fontSize: 30}}>Welcome to my blog!</div>
      <div style={{ alignItems: "center" }}>
        <a href="/create">
          <button style={{ fontSize: 20}}>Create</button>
        </a>
      </div>
      <div>
        <a href="/view">
          <button style={{ fontSize: 20}}>View</button>
        </a>
      </div>
    </div>
  );
}
