import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel : <input onChange={onSearchChange} type="text" />
      </div>
      <small>
        Ditemukan {props.totalPost} data dengan pencarian {search}
      </small>
    </>
  );
}

export default Search;
