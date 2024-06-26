import React from 'react'
import TableItem from './TableItem'

const TableList = ({rows, removeRow ,updateRow}) => {
  return (
    <div>

<table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col" className='d-flex justify-content-end'>Actions</th>
          </tr>
        </thead>
        <tbody>
        
        {rows.map((row,index) =>(
            <TableItem
            ket = {index}
            row = {row}
            index = {index}
            removeRow = {removeRow}
            updateRow = {updateRow} 
            />
        ))}
        </tbody>
      </table>

    </div>
  )
}

export default TableList