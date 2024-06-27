import React, { useEffect, useState } from 'react';
import TableFuction from './TableFuction';
import TableList from './TableList';
import data from './data.json';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [isDataVisible, setIsDataVisible] = useState(false);

  const addRow = (row) => {
    setRows([...rows, row]);
  };

  const removeRow = (id) => {
    const newRow = rows.filter((row, index) => index !== id);
    setRows(newRow);
  };

  const updateRow = (id, updateRow) => {
    const newRow = rows.map((row, index) => (index === id ? updateRow : row));
    setRows(newRow);
  };

  // useEffect(() => {
  //   if (isDataVisible) {
  //     setRows(data);
  //   }
  // }, [isDataVisible]);

  // const showData = () => {
  //   setIsDataVisible(true);
  // };

  useEffect(() => {
   
      setRows(data);
    
  }, []);

  return (
    <div>
      {/* <TableFuction addRow={addRow} removeRow={removeRow} showData={showData} /> */}
      <TableFuction addRow={addRow} removeRow={removeRow}  />
      <TableList rows={rows} removeRow={removeRow} updateRow={updateRow} />
    </div>
  );
};

export default Table;
