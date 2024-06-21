import React, { useState } from 'react';
import './Form.css'; // Import the CSS file
import validator from 'validator';
const Form = ({ formData, handleInputChange, handleAdd }) => {
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
    if (Object.keys(validationErrors).length === 0) {
      handleAdd();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <form className="form-content">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên:</label>
          <input 
            type="text" 
            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
            id="name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input 
            type="email" 
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
            id="email" 
            placeholder="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Địa chỉ:</label>
          <input 
            type="text" 
            className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
            id="address" 
            placeholder="Address" 
            name="address" 
            value={formData.address} 
            onChange={handleInputChange} 
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Số điện thoại:</label>
          <input 
            type="text" 
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
            id="phone" 
            placeholder="Phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange} 
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <button type="button" className="btn btn-success" onClick={handleAddWithValidation}>Add</button>
      </form>
    </div>
  );
}

export default Form;
