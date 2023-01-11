import React from 'react';

const SearchButton = ({ check, guess }) => (
  <button
    className="search-button"
    onClick={() => check(guess)}
  >
    <img src={magnifyingGlassImg} alt="search button" />
  </button>
);

export default SearchButton;
