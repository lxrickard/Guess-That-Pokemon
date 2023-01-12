import React from 'react';
import pokedexImg from '../resources/pokedex.png';
// lifting state up from InputField.js to App.js
// Take props to verify the check function

const SearchButton = (props) => (
  <button
    className="search-button"
    onClick={props.handleSubmit}
  >
    <img className="img-button" src={pokedexImg} alt="search button" />
  </button>
);

export default SearchButton;
