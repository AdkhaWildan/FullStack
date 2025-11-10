// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function Blog() {
  //   const [detailPosts, setDetailPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => setDetailPosts(json));
  //   }, []);

  const detailPosts = useLoaderData();

  return (
    <>
      <h2>The Blog Posts</h2>
      {detailPosts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
