import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { line, newRender, filterName } = useContext(StarWarsContext);
  const { filterByName } = filterName;

  return (
    <table>
      {/* <thead> */}
      <tr>
        <th>Name</th>
        <th>Rotation period</th>
        <th>Orbital period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
      {/* </thead> */}
      {/* // <tbody> */}
      { newRender ? Object.values(filterByName).map((obj) => (
          obj.map((item) => (
            <tr keys={item} >
              {Object.values(item).map(info => <td keys={ info }>{info}</td>)}
            </tr>)
          )
      ))
      : line.map((cell) => (
        <tr key={ cell }>
          {cell.map((info) => (<td key={ info }>{info}</td>))}
        </tr>)) }
      {/* </tbody> */}
    </table>
  );
}

// (Object.values(filterByName).map(obj => obj.map(item => console.log(Object.values(item)))))



export default Table;
