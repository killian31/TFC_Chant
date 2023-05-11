import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input className="search-bar-input" type="text" placeholder="Search..."/>
      <div className="search-bar-buttons">
        <button className="search-bar-button">Search</button>
        <button className="search-bar-button">Random</button>
      </div>
    </div>
  );
};

export default SearchBar;

