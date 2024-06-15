import React, { useState } from 'react';
import TableFuction from './TableFuction';
import TableList from './TableList';

const Table = () => {
  const [rows, setRows] = useState([]);

  const addRow = (row) => {
    setRows([...rows, row]);
  };

  const removeRow = (id) => {
    const newRow = rows.filter((row, index) => index !== id);
    setRows(newRow);
  };

  const updateRow = (id, updateRow) => {
    const newRow = rows.map((row, index) => (index === id ? updateRow : row))
setRows(newRow)
  }
  return (
    <div>
      <TableFuction addRow={addRow} removeRow={removeRow} />
      <TableList rows={rows} removeRow={removeRow} updateRow = {updateRow} />
    </div>
  );
};

export default Table;