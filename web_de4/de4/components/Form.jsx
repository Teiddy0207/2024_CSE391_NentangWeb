import React, { useState } from 'react';
import './Form.css';
import validator from 'validator';

const Form = ({ formData, handleInput, handleAdd }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [errors, setErrors] = useState({});
    const [trangThai, setTrangThai] = useState('');

    const validate = () => {
        let newErrors = {};
        if (validator.isEmpty(formData.tenCongViec)) newErrors.tenCongViec = "Tên công việc là bắt buộc";
        if (validator.isEmpty(formData.thoiGianBatDau)) newErrors.thoiGianBatDau = "Thời gian bắt đầu là bắt buộc";
        if (validator.isEmpty(formData.thoiGianKetThuc)) newErrors.thoiGianKetThuc = "Thời gian kết thúc là bắt buộc";
        if (validator.isEmpty(trangThai)) newErrors.trangThai = "Trạng thái là bắt buộc";
        return newErrors;
    };

    const handleAddWithValidation = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            handleAdd({ ...formData, trangThai });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className='form container'>
            <form className="form-content">
                <div className='d-flex justify-content-between'>
                    <div>Thêm công việc</div>
                    <button type="button" onClick={() => setIsVisible(false)} style={{ cursor: 'pointer' }}>X</button>
                </div>

                <div className="mb-3">
                    <label className="form-label">Tên công việc:</label>
                    <input
                        type="text"
                        id="tenCongViec"
                        placeholder="Tên công việc"
                        name="tenCongViec"
                        value={formData.tenCongViec}
                        onChange={handleInput}
                        className={`form-control ${errors.tenCongViec ? 'is-invalid' : ''}`} 
                    />
                    {errors.tenCongViec && <div className="invalid-feedback">{errors.tenCongViec}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Thời gian bắt đầu:</label>
                    <input
                        type="text"
                        id="thoiGianBatDau"
                        placeholder="Thời gian bắt đầu"
                        name="thoiGianBatDau"
                        value={formData.thoiGianBatDau}
                        onChange={handleInput}
                        className={`form-control ${errors.thoiGianBatDau ? 'is-invalid' : ''}`}
                    />
                    {errors.thoiGianBatDau && <div className="invalid-feedback">{errors.thoiGianBatDau}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Thời gian kết thúc:</label>
                    <input
                        type="text"
                        id="thoiGianKetThuc"
                        placeholder="Thời gian kết thúc"
                        name="thoiGianKetThuc"
                        value={formData.thoiGianKetThuc}
                        onChange={handleInput}
                        className={`form-control ${errors.thoiGianKetThuc ? 'is-invalid' : ''}`} 
                    />
                    {errors.thoiGianKetThuc && <div className="invalid-feedback">{errors.thoiGianKetThuc}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Trạng thái:</label>
                    <div>
                        <button
                            type="button"
                            className={`btn ${trangThai === 'Đang khẩn cấp' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setTrangThai('Đang khẩn cấp')}
                        >
                            Đang khẩn cấp
                        </button>
                        <button
                            type="button"
                            className={`btn ${trangThai === 'Trì hoãn' ? 'btn-primary' : 'btn-secondary'} ms-2`}
                            onClick={() => setTrangThai('Trì hoãn')}
                        >
                            Trì hoãn
                        </button>
                    </div>
                    {errors.trangThai && <div className="invalid-feedback">{errors.trangThai}</div>}
                </div>
                <button type="button" className="btn btn-success" onClick={handleAddWithValidation}>Thêm</button>
            </form>
        </div>
    );
}

export default Form;
