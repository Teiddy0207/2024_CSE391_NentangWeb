import React, { useState } from 'react'
import './TableFuction.css'
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



    const formStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Thay đổi màu nền ở đây
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
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
                 <div style={formStyle} className='border border-info p-4 '>
                <form action="">
                <div>Ten: </div>
                 <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} className='form-control' />
                 </form>
                 <form action="">
                 <div>Email: </div>
                 <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange}className='form-control' />
                 </form>
                <form action="">
                <div>Dia chi: </div>
                 <input type="text" placeholder="Address" name="address" value={formData.address} onChange={handleInputChange} className='form-control'/>
                 </form>
                 <form action="">
                 <div>SO DT: </div>
                 <input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange} className='form-control'/>
                 </form>
                 <button className="btn bg-success" onClick={handleAdd}>Add</button>
            
               </div>
            )}
        </div>
    )
}

export default TableFuction