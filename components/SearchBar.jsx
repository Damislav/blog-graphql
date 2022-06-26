import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <input
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
