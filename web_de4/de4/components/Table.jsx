import React, { useEffect, useState } from 'react';
import TableFuction from './TableFuction';
import TableList from './TableList';
import data from './data.json';
import Form from './Form';

const Table = () => {
  const [rows, setRows] = useState(data);
  const [formData, setFormData] = useState({
    tenCongViec: '',
    thoiGianBatDau: '',
    thoiGianKetThuc: '',
    trangThai: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = (newRow) => {
    setRows([...rows, newRow]);
    setFormData({
      tenCongViec: '',
      thoiGianBatDau: '',
      thoiGianKetThuc: '',
      trangThai: ''
    });
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (index, newRow) => {
    setRows(rows.map((row, i) => (i === index ? newRow : row)));
  };

  return (
    <div>
      <TableFuction />
      <TableList rows={rows} removeRow={removeRow} updateRow={updateRow} />
      <Form formData={formData} handleInput={handleInput} handleAdd={handleAdd} />

    </div>
  );
};

export default Table;
