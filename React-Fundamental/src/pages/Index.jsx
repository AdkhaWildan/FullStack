import Article from "../components/article";
import posts from "../data/Posts.json";

import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input onChange={changeSearch} type="text" />
      </div>
      <small>Ditemukan 0 data dengan pencarian {search}</small>
      {/* {posts.map((blog) => (
        <Article key={blog.title} title={blog.title} tags={blog.tags} date={blog.date} />
      ))} */}
      {posts.map(({ title, tags, date }, index) => (
        <Article {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
}

export default HomePage;
