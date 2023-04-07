import React from "react";

function Search({ searchText, setSearchText }) {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    setSearchText(searchValue)
    console.log(searchValue)
    setSearchText('')
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
