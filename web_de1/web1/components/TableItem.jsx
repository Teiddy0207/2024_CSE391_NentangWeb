import React, { useState } from 'react'

const TableItem = ({ row, index, removeRow, updateRow }) => {

    const [editing, setEditing] = useState(false);
    const [newRow, setNewRow] = useState({ ...row });// khoi tao gia tri mac dinh, sao chep doi tuong trong row vao doi tuong moi va dat tai newRow



    const handleRemove = () => {
        removeRow(index)
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        updateRow(index, newRow);
        setEditing(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setNewRow({ ...newRow, [name]: value } ) // cap nhat gia tri NewRow bang cách sao chép cái giá trị mới vào
        console.log(newRow)
    }

    return (


        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>{editing ? <input type="text" name="name" value={newRow.name} onChange={handleChange} /> : row.name}</td>
            <td>{editing ? <input type="text" name="email" value={newRow.email} onChange={handleChange} /> : row.email}</td>
            <td >{editing ? <input type="text" name="address" value={newRow.address} onChange={handleChange} /> : row.address} </td>
            <td> {editing ? <input type="text" name="phone" value={newRow.phone} onChange={handleChange} /> : row.phone}</td>
            <td className='d-flex justify-content-end'>
                {editing ? (
                    <>
                        <button className="btn btn-success" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary ms-2" onClick={() => setEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <button className="btn btn-warning" onClick={handleEdit} >Edit</button>
                )}
                <button className="btn btn-danger ms-2" onClick={handleRemove} >Delete</button>
            </td>
        </tr>


    )
}

export default TableItem

