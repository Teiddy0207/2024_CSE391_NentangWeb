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
    <form onSubmit={handleSubmit} className='mb-3'>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className='form-control'
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
