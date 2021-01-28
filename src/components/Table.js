import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterByName from './FilterByName';
import FilterByNumber from './FilterByNumber';

const Table = () => {
  const { filteredPlanetNumber } = useContext(StarWarsContext);
  // const { filteredPlanets } = useContext(StarWarsContext);
  return (
    <div>
      <h1>Planets of Star Wars</h1>
      <FilterByName />
      <FilterByNumber />
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Diameter</th>
            <th scope="col">Climate Period</th>
            <th scope="col">Gravity</th>
            <th scope="col">Terrain</th>
            <th scope="col">Surface Water</th>
            <th scope="col">Population</th>
            <th scope="col">Films</th>
            <th scope="col">Created</th>
            <th scope="col">Edited</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredPlanetNumber.map((planet) => (
            // filteredPlanets.map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
