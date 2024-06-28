import React, { useState } from 'react';
import './Form.css';
import validator from 'validator';
const Form = ({ formData, handleInput, handleAdd }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (validator.isEmpty(formData.name)) newErrors.name = "Name is requied!! , you must fill in the blank";
        if(formData.name.length > 30){
          newErrors.name = "to Long , please write less than 30 word";
        }
        if (validator.isEmpty(formData.address)) newErrors.address = "Address is required!!, you must fill in the blank";
        if(formData.address.length > 50){
          newErrors.address = "to Long , please write less than 50 word";
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
                <div className='d-flex justify-content-between '>
                    <div>Add Store</div>
                    <button onClick={() => setIsVisible(false)} style={{ cursor: 'pointer' }} className='btn'>X</button>
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
                    <label htmlFor="phone" className="form-label">Lan cuoi cap nhat:</label>
                    <input
                        type="text"
                        id="last"
                        placeholder="Lan cuoi cap nhat"
                        name="last"
                        className={`form-control ${errors.last ? 'is-invalid' : ''}`} 
                        value={formData.last}
                        onChange={handleInput}
                    />
                                {errors.last && <div className="invalid-feedback">{errors.last}</div>}
                </div>
           <div className='d-flex justify-content-end'>
               <div className='btn'>Cancel</div>
                <button type="button" className="btn btn-success" onClick={handleAddWithValidation}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
