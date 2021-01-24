import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/table';
import StarWarsContext from './context/StarWarsContext';

function App() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  // const [planetList, setPlanetList] = useState([]);
  const [context, setContext] = useState({
    filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          // column: '',
          // comparison: '',
          // value: '',
        },
      ],
    },
    planetList: [],
  });

  useEffect(() => {
    console.log('entrou no fetch');
    async function fetchPlanet() {
      const { results } = await fetch(url)
        .then((response) => response.json());
      setContext({ ...context, planetList: results });
    }
    fetchPlanet();
  }, []);

  return (
    <StarWarsContext.Provider value={ { context, setContext } }>
      <div className="App">
        <header>Star Wars Datatable </header>
        <Table />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
