import React, { useState } from 'react';
import './style.css';

const Main = () => {

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);
  
    const handleSubmit = () => {
      setJobs(prev => [...prev, job]);
      setJob(''); 
    };
  
    const handleDelete = (index) => {
      const newJobs = [...jobs]; // Tạo một bản sao của mảng jobs
      newJobs.splice(index, 1); // Loại bỏ một phần tử tại vị trí index
      setJobs(newJobs); // Cập nhật state với mảng mới
    };
  return (
    <div className="container">
      <input
        type="text"
        value={job}
        onChange={e => setJob(e.target.value)}
        placeholder="Them cong viec o day"
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;