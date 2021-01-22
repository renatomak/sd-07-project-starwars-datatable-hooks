import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  let filteredData = [];
  if (filters) filteredData = filters.filterByName.name;
  if (!filters) filteredData = data;
  const magicNumber = 0;
  return (
    <table>
      <thead>
        <tr>
          {
            data
              ? Object.keys(data[0]).filter((key) => key !== 'residents')
                .map((tableHeader) => (
                  <th key={ tableHeader }>
                    {tableHeader.replace('_', ' ')
                      .replace(tableHeader
                        .charAt(magicNumber), tableHeader
                        .charAt(magicNumber).toUpperCase())}
                  </th>))
              : <th>tá carregando essa bagaça.</th>
          }
        </tr>
      </thead>
      <tbody>
        {filteredData && filteredData.map((tableItem, index) => (
          <tr key={ index }>
            {Object.entries(tableItem).map(([key, value]) => {
              if (key === 'residents') {
                return undefined;
              }
              return (
                <td key={ key }>{value}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
