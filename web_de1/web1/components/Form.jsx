import React, { useState } from 'react';
import './Form.css';

const Form = ({ formData, handleInput, handleAdd }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`form-container bg-info ${isVisible ? '' : 'hidden'}`}>
            <form className="form-content">
                <div className='d-flex justify-content-between'>
                    <div>Thêm nhân viên</div>
                    <button onClick={() => setIsVisible(false)} style={{ cursor: 'pointer' }}>X</button>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="name"
                        className='form-control'
                        value={formData.name}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        className='form-control'
                        value={formData.email}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Địa chỉ:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Address"
                        name="address"
                        className='form-control'
                        value={formData.address}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Số điện thoại:</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        name="phone"
                        className='form-control'
                        value={formData.phone}
                        onChange={handleInput}
                    />
                </div>
                <button type="button" className="btn btn-success" onClick={handleAdd}>Add</button>
            </form>
        </div>
    );
}

export default Form;
