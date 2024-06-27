import React, { useState } from 'react';

const TableItem = ({ row, index, removeRow, updateRow }) => {
    const [editing, setEditing] = useState(false);
    const [newRow, setNewRow] = useState({ ...row });

    const handleRemove = () => {
        removeRow(index);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        updateRow(index, newRow);
        setEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRow({ ...newRow, [name]: value });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{editing ? <input type="text" name="tenCongViec" value={newRow.tenCongViec} onChange={handleChange} /> : row.tenCongViec}</td>
            <td>{editing ? <input type="text" name="thoiGianBatDau" value={newRow.thoiGianBatDau} onChange={handleChange} /> : row.thoiGianBatDau}</td>
            <td>{editing ? <input type="text" name="thoiGianKetThuc" value={newRow.thoiGianKetThuc} onChange={handleChange} /> : row.thoiGianKetThuc}</td>
            <td>{editing ? <input type="text" name="trangThai" value={newRow.trangThai} onChange={handleChange} /> : row.trangThai}</td>
            <td className='d-flex justify-content-end'>
                {editing ? (
                    <>
                        <button className="btn btn-success" onClick={handleSave}>Lưu</button>
                        <button className="btn btn-secondary ms-2" onClick={() => setEditing(false)}>Hủy</button>
                    </>
                ) : (
                    <button className="btn btn-warning" onClick={handleEdit}>Sửa</button>
                )}
                <button className="btn btn-danger ms-2" onClick={handleRemove}>Xóa</button>
            </td>
        </tr>
    );
}

export default TableItem;
