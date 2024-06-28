import React, { useEffect, useState } from 'react';
import TableFuction from './TableFuction';
import TableList from './TableList';
import data from './data.json';
import Header from './Header';
import Footer from './Footer';
import './data.json'
const Table = () => {
  const [rows, setRows] = useState([]);


  const addRow = (row) => {
    setRows([...rows, row]);
  };

  useEffect(() => {
    setRows(data);
  }, []);
  return (
    <div>
      <Header />
      <TableFuction addRow={addRow} />
      <TableList rows={rows} />
      <Footer />
    </div>
  );
};

export default Table;
