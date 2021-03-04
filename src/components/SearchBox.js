import React from 'react';
import '../containers/App.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <div>
        <label for="searchBox">↓  Search Me  ↓</label>
      </div>
      <input
        id='searchBox'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;