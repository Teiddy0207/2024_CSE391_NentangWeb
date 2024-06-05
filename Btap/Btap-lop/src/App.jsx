import React, { useState } from 'react';
import TaskList from '../Components/TaskList';
import AddTask from '../Components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((_, i) => i !== id);
    setTasks(newTasks);
  };
const updateTask = (id, updatedTask) => {
const newTask = tasks.map((task,index) => (index === id ? updatedTask : task))
setTasks(newTask)
}
  return (
  
  <div className='container-sm'>
  
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask}  updateTask={updateTask}/>
    </div>
  );
};

export default App;
