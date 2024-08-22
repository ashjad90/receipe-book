import React, { useEffect, useState } from "react";

function SearchBar({ onChange }) {
  const [inputValue, setInputvalue] = useState("");

  useEffect(() => {
    const unsubscribe = setTimeout(() => onChange(inputValue), 500);
    return () => {
      clearTimeout(unsubscribe);
    };
  }, [inputValue]);
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Type Something"
        onChange={(e) => setInputvalue(e.target.value)}
        value={inputValue}
      />
      <i className="fa-solid fa-magnifying-glass fa-xs"></i>
    </div>
  );
}

export default SearchBar;
