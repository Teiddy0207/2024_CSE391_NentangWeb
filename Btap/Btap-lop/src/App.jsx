import React, { useEffect, useState } from 'react';
import TaskList from '../Components/TaskList';
import AddTask from '../Components/AddTask'

const App = () => {
  // mảng lưu trữ các task


  const [tasks, setTasks] = useState([]);


  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newTasks = [
      ...tasks.slice(0, id),
      ...tasks.slice(id + 1)
    ]; // kiểm tra xem có trùng
    setTasks(newTasks);// chi in ra nhung cai k trung voi id
  };
  const updateTask = (id, updatedTask) => {
    const newTask = tasks.map((task, index) => (index === id ? updatedTask : task))
    //gọi 1 mảng mới và thực hiện thao tác
    // nếu có cùng id khi ta ấn vào, thì nó sẽ gọi tham số update còn k thì giư nguyên các tasl
    // cật nhật biến cập nhật setTask
    setTasks(newTask)
  }



  return (

    <div className='container-fluid'>
      <div className='border border black p-4 bg-info'>
        <div className='d-flex justify-content-center mb-3 text-white fw-bold fs-3'>DANH SÁCH VIỆC CẦN LÀM</div>

        <AddTask addTask={addTask} />
      </div>
      <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
      {/* dùng props để chuyền vào các file */}

    </div>
  );
};

export default App;
