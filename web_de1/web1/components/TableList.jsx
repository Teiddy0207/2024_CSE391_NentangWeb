import React from 'react'
import TableItem from './TableItem'

const TableList = ({ rows }) => {
  return (
    <div className='mb-5'>

      <table className="container table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
         
            <th scope="col">Action</th>
            <th>stt</th>
            <th scope="col">Manager</th>
            <th scope="col">Address</th>
            <th scope="col" className='d-flex flex-end'>Last update</th>

          </tr>
        </thead>
        <tbody>

          {rows.map((row, index) => (
            <TableItem
              ket={index}
              row={row}
              index={index}
            />
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default TableList