import React, { useState } from 'react';
import './Form.css';
import validator from 'validator';
const Form = ({ formData, handleInput, handleAdd }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (validator.isEmpty(formData.name)) newErrors.name = "Tên là bắt buộc";
        if (validator.isEmpty(formData.email)) {
          newErrors.email = "Email là bắt buộc";
        } else if (!validator.isEmail(formData.email)) {
          newErrors.email = "Email không hợp lệ";
        }
        if (validator.isEmpty(formData.address)) newErrors.address = "Địa chỉ là bắt buộc";
        if (validator.isEmpty(formData.phone)) {
          newErrors.phone = "Số điện thoại là bắt buộc";
        } else if (!validator.isMobilePhone(formData.phone, 'any')) {
          newErrors.phone = "Số điện thoại không hợp lệ";
        }
        return newErrors;
      };
    
      const handleAddWithValidation = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {// kiem tra 1 mang chua cac doi tuong bi loi, neu k bi loi thi goi ham add
          handleAdd();
        } else {
          setErrors(validationErrors);
        }
      };

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
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                        value={formData.name}
                        onChange={handleInput}
                    />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleInput}
                    />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Địa chỉ:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Address"
                        name="address"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
                        value={formData.address}
                        onChange={handleInput}
                    />
                         {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Số điện thoại:</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        name="phone"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                        value={formData.phone}
                        onChange={handleInput}
                    />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <button type="button" className="btn btn-success" onClick={handleAddWithValidation}>Add</button>
            </form>
        </div>
    );
}

export default Form;
