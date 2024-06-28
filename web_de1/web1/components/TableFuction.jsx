import React, { useState } from 'react'
import Form from './Form'
const TableFuction = ({ addRow }) => {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        last: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target // lay ten va gia tri cua tung input
        setFormData({ ...formData, [name]: value })
    }
    const handleAdd = () => {
        addRow(formData)

        setFormData({
            name: '',
            address: '',
            last: ''
        })
        setShowForm(false)
    }
    return (
        <div className='container wrap d-flex justify-content-between'>

            <div className='button '>
                <button className='btn bg-success ms-2' onClick={() => setShowForm(true)}>ADD</button>
                <button className='btn bg-danger' >Export</button>

            </div>
            <form action="">

                <input type="text"
                    className='form-control'
                    placeholder='Search for id'
                />
            </form>
            <ul className='d-flex'>
                <div className='btn'>Result</div>
                <div className='btn'>20</div>
                <div className='btn btn-secondary' > ^ </div>
            </ul>

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