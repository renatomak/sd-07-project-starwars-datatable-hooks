import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByNumber = () => {
  const {
    setFilterColumn,
    setFilterComparison,
    setFilterValue,
    // setFilteredPlanets,
    filters,
    filteredPlanets,
    setFilteredPlanetNumber,
  } = useContext(StarWarsContext);

  // Lógica do aluno Carlos Souza
  // Fonte: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/blob/121ebd0b46568de1adf8921899e95a07e12e2985/src/components/Table/index.js
  const filterNumber = (value) => {
    const { filterByNumericValues } = filters;
    let results = filteredPlanets;
    filterByNumericValues.forEach((_, index) => {
      results = results.filter((planet) => {
        const { column, comparison } = filterByNumericValues[index];
        switch (comparison) {
        case 'maior que':
          return parseFloat(planet[column]) > parseFloat(value);
        case 'igual a':
          return parseFloat(planet[column]) === parseFloat(value);
        case 'menor que':
          return parseFloat(planet[column]) < parseFloat(value);
        default:
          return planet;
        }
      });
    });
    setFilteredPlanetNumber(results);
    // return results;
  };

  const handleChangeColumn = ({ target: { value } }) => {
    setFilterColumn(value);
  };

  const handleChangeComparison = ({ target: { value } }) => {
    setFilterComparison(value);
  };

  const handleChangeValue = ({ target: { value } }) => {
    const emptyValue = 0;
    if (value === '') value = emptyValue;
    setFilterValue(value);
    filterNumber(value);
  };

  return (
    <div className="input-group mb-3">
      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
      >
        <option value="">Select a filter</option>
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
      >
        <option value="">Select an option</option>
        <option value="maior que">Maior que</option>
        <option value="igual a">Igual a</option>
        <option value="menor que">Menor que</option>
      </select>
      <input
        data-testid="value-filter"
        placeholder="Type a number"
        onChange={ handleChangeValue }
      />
    </div>
  );
};

export default FilterByNumber;
