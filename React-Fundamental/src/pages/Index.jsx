import Article from "../components/article";
import posts from "../data/Posts.json";
import Search from "../components/Search";

import { useState } from "react";

function HomePage() {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [totalPost, setTotalPost] = useState(0);

  const onSearchChange = (value) => {
    const filtered = posts.filter((item) => item.title.includes(value));
    setFilteredPosts(filtered);
    setTotalPost(filtered.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPost={totalPost} />

      {/* {posts.map((blog) => (
        <Article key={blog.title} title={blog.title} tags={blog.tags} date={blog.date} />
      ))} */}
      {/* {posts.map(({ title, tags, date }, index) => (
        <Article {...{ title, tags, date }} key={index} />
      ))} */}
      {filteredPosts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default HomePage;
