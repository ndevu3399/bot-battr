import React from 'react';
import PropTypes from 'prop-types';

function SortBar({ sortBy }) {
  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      <div className="sort-options">
        <button onClick={() => sortBy('health')}>Health</button>
        <button onClick={() => sortBy('damage')}>Damage</button>
        <button onClick={() => sortBy('armor')}>Armor</button>
      </div>
    </div>
  );
}

SortBar.propTypes = {
  sortBy: PropTypes.func.isRequired
};

export default SortBar;