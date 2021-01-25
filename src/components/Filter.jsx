import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context';
import { useColumnsKeys } from '../hooks';

const removeColumn = [
  'created',
  'edited', 'url', 'films', 'residents', 'name', 'climate', 'gravity', 'terrain',
];

export default function Filter() {
  const initialState = { column: '', comparison: '', value: '' };
  const { dispatchFilter, FILTER_COLUMN } = useContext(StarWarsContext);
  const [newFilters, setNewFilters] = useState(initialState);
  const setFilter = ({ target: { id, value } }) => {
    setNewFilters({ ...newFilters, [id]: value });
  };
  const columns = useColumnsKeys(removeColumn);
  return (
    <div>
      <select id="column" data-testid="column-filter" onChange={ setFilter }>
        <option>Column</option>
        {columns && columns.map((column, i) => (<option key={ i }>{column}</option>))}
      </select>
      <select id="comparison" data-testid="comparison-filter" onChange={ setFilter }>
        <option>Comparison</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input id="value" data-testid="value-filter" type="number" onChange={ setFilter } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => dispatchFilter(
          { type: FILTER_COLUMN, payload: newFilters },
        ) }
      >
        Filtre
      </button>
    </div>
  );
}
