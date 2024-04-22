import React from 'react';
import buscar from '../../img/buscar.png';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Buscar"/>
      <button> <img src={buscar} alt="Buscar"/> </button>
    </div>
  );
}

export default SearchBar;
