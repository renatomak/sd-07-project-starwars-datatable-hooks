import React, { useContext } from 'react';
import { Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import context from '../contextAPI/Context';

function MyTable() {
  const { data } = useContext(context);
  const empty = 0;
  if (data.length === empty) return <span className="span-control">carregando...</span>;
  const final = Object.keys(data[0]).filter((el) => el !== 'residents');
  return (
    <section className="table-control">
      <Table>
        <TableHead>
          <TableRow>
            {
              final.map((items) => <TableCell key={ items }>{items}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <tbody>
          {
            data.map((planet, index) => (
              <tr key={ index }>
                <td key={ planet.name }>
                  { planet.name }
                </td>
                <td key={ planet.rotation_period }>{ planet.rotation_period }</td>
                <td key={ planet.orbital_period }>{ planet.orbital_period }</td>
                <td key={ planet.diameter }>{ planet.diameter }</td>
                <td key={ planet.climate }>{ planet.climate }</td>
                <td key={ planet.gravity }>{ planet.gravity }</td>
                <td key={ planet.terrain }>{ planet.terrain }</td>
                <td key={ planet.surface_water }>{ planet.surface_water }</td>
                <td key={ planet.population }>{ planet.population }</td>
                <td key={ planet.films }>{ planet.films }</td>
                <td key={ planet.created }>{ planet.created }</td>
                <td key={ planet.edited }>{ planet.edited }</td>
                <td key={ planet.url }>{ planet.url }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </section>
  );
}

export default MyTable;
