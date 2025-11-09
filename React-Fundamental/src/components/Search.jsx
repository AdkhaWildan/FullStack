import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    // setSearch(event.target.value);
    props.onSearchChange(search);
  };

  const SearchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Artikel : {""}
        <input onChange={(e) => setSearch(e.target.value)} onKeyDown={SearchKeyDown}></input>
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPost} data dengan pencarian {search}
      </small>
    </>
  );
}

export default Search;
