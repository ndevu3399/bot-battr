import React from 'react';
import PropTypes from 'prop-types';

const botClasses = [
  'All', 'Support', 'Medic', 'Assault', 
  'Defender', 'Captain', 'Witch'
];

function FilterBar({ filterBy }) {
  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      <div className="filter-options">
        {botClasses.map(botClass => (
          <button 
            key={botClass}
            onClick={() => filterBy(botClass)}
          >
            {botClass}
          </button>
        ))}
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  filterBy: PropTypes.func.isRequired
};

export default FilterBar;