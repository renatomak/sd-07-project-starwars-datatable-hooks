import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataSave, setDataSave] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const handleChangeName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const contextValue = {
    handleChangeName,
    setData,
    setDataSave,
    setFilters,
    dataSave,
    data,
    filters,
  };

  useEffect(() => {
    const negNumber = -1;
    setData(dataSave
      .filter((item) => item.name.indexOf(filters.filterByName.name) > negNumber));
  }, [dataSave, filters.filterByName]);

  useEffect(() => {
    if (filters.filterByNumericValues.length >= 1) {
      const counter = filters.filterByNumericValues.length - 1;
      const { column, comparison, value } = filters.filterByNumericValues[counter];
      if (comparison === 'menor-que') {
        const filterColumn = dataSave.filter((item) => Number(item[column]) < value);
        setData(filterColumn);
      } else if (comparison === 'maior-que') {
        console.log('maior');
        const filterColumn = dataSave.filter((item) => Number(item[column]) > value);
        setData(filterColumn);
      } else if (comparison === 'igual-a') {
        console.log('igual');
        const filterColumn = dataSave
          .filter((item) => Number(item[column]) === Number(value));
        console.log(filterColumn);
        setData(filterColumn);
      }
    }
  }, [dataSave, filters.filterByNumericValues]);

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
