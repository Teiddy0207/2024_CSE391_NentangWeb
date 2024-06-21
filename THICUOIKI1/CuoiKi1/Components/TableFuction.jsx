import React, { useState } from 'react'
import './TableFuction.css'
import  Form  from './Form';
const TableFuction = ({ addRow }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    }) // luu tru du lieu nhap vao form

    const handleInputChange = (e) => {
        const { name, value } = e.target;// lay ten va gia tri
        setFormData({ ...formData, [name]: value })//spread operator , tao 1 ban sao mới, tất cả thuộc tính sẽ dc thêm vào bản sao mới
// vis dụ name là email và thuộc tính giá trị là abc@gmail.com => sẽ đẩy vào giá trị mới như thế
    }// duoc goi khi có bất kì sự thy đổi trong form, lấy từng giá trị một
// name la ten của input
    const handleAdd = () => {
        addRow(formData)

        setFormData({
            name: '',
            email: '',
            address: '',
            phone: '',
        })
        setShowForm(false)
    }



    return (
        <div className='wrap d-flex justify-content-between  p-3'>
            <div className='logo fs-3'>
                <span>Manage <span className='text-light fw-bold'>Employees</span> </span>
            </div>
            <div className='button '>
                <button className='btn bg-danger '  >Delete</button>
                <button className='btn bg-success ms-2' onClick={() => setShowForm(true)}>Add New Employee</button>
            </div>

            {showForm && (
        
            <Form
            formData = {formData}
            handleInputChange = {handleInputChange}
            handleAdd={handleAdd}
            />
            )}
        </div>
    )
}

export default TableFuction