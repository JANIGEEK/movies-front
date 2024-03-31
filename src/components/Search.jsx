import React from "react";

const Search = () => {

const handleSubmit = (e) => {
    e.preventDefault()
}

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-sm-2"
        type="search"
        placeholder="Search"
        //value={searchText}
        //onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
