import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      //addTask(task) gọi hàm này với task là tham số.
      // Điều này thêm task mới vào danh sách các task trong component cha 
      setTask('');
    }
  };

  return (
   <div className='container'>
   <form onSubmit={handleSubmit} className='d-flex mb-3'>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="TIÊU ĐỀ VIỆC CẦN LÀM... " 
        className='form-control'
      />
      <button type="submit"  className='btn btn-secondary'>THÊM MỚI</button>
    </form>
    </div>
  );
};

export default AddTask;
