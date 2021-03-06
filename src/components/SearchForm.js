import React from "react";

// eslint-disable-next-line react/prop-types
function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        id="search-field"
        type="text"
        onChange={handleInputChange}
        value={searchText}
        placeholder="Enter a location..."
      />
      <button
        id="search-btn"
        type="submit"
        onClick={onSubmit}
        data-testid="searchbutton"
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
