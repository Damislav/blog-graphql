import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <form>
      <input type="search" onChange={searchInput} />
    </form>
  );
};

export default SearchBar;
