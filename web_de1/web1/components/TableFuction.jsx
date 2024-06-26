import React, { useState } from 'react'
import Form from './Form'


const TableFuction = ({ addRow , showData  }) => {

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    })
   
    const handleInput = (e) => {
        const { name, value } = e.target // lay ten va gia tri cua tung input
        setFormData({ ...formData, [name]: value })

    }

    const handleAdd = () => {
        addRow(formData)

        setFormData({
            name: '',
            email: '',
            address: '',
            phone: ''

        })
        setShowForm(false)
    }
    const reomoveForm = () => {
        setShowForm(false)
    }

    return (
        <div className='wrap d-flex justify-content-between  p-3'>
            <div className='logo fs-3'>
                <span>Manage <span className='text-light fw-bold'>Employees</span> </span>
            </div>
            <div className='button '>
                <button className='btn bg-danger' >Delete</button>
                <button className='btn bg-success ms-2' onClick={() => setShowForm(true)}>Add New Employee</button>
                <button className='btn bg-warning  ms-2' onClick={showData}>Hien thi du lieu</button>
            </div>
            {showForm && (
                <Form
                    formData={formData}
                    handleInput={handleInput}
                    handleAdd={handleAdd}

                />
            )}

        </div>
    )
}

export default TableFuction