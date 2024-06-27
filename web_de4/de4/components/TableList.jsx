import React from 'react'
import TableItem from './TableItem'

const TableList = ({rows, removeRow ,updateRow}) => {
  return (
    <div>
      <table className="table container table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên công việc</th>
            <th scope="col">Thời gian bắt đầu</th>
            <th scope="col">Thời gian kết thúc</th>
            <th scope="col">Trạng thái</th>
            <th scope="col" className='d-flex justify-content-end'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableItem
              key={index}
              row={row}
              index={index}
              removeRow={removeRow}
              updateRow={updateRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableList;
