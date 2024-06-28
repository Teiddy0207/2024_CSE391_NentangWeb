import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCircle, faTrash, faWrench } from '@fortawesome/free-solid-svg-icons';
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
        setNewRow({ ...newRow, [name]: value }) // cap nhat gia tri NewRow bang cách sao chép cái giá trị mới vào
        console.log(newRow)
    }

    return (
        <tr>
            <td className='d-flex'>
                <button className="btn btn-danger ms-2" onClick={handleRemove} ><FontAwesomeIcon icon={faTrash} /></button>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faWrench} /></button>
                <button className="btn btn-success" onClick={handleEdit} ><FontAwesomeIcon icon={faC} /></button>
            </td>
            <td>{row.stt}</td>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td> {row.last}</td>

        </tr>


    )
}

export default TableItem

