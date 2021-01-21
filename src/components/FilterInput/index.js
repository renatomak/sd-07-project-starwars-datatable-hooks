import React, { useContext } from 'react';
import { StarWarsContext } from '../../providers/StarWarsProvider';

const FilterInput = () => {
  const { filterByName, filters } = useContext(StarWarsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ filters.filterByName.name }
      onChange={ ({ target }) => filterByName(target.value) }
    />
  );
};

export default FilterInput;
