import React, { useState } from 'react';
import Button from './Button';

const Task = ({ task, index, removeTask, updateTask }) => {
  const [editing, setEditing] = useState(false)
  const [newTask, setNewTask] = useState(task)
const [completed,setCompleted] = useState(false)


  const handleEdit = () => {
    setEditing(true)
  }
  const handleSave = () => {
    updateTask(index, newTask)
    setEditing(false)
  }

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const toggleCompletr = () => 
    {
      setCompleted(!completed)
    }

  return (
    <div className='d-flex justify-content-between border border-black p-2 mb-3'>
      {editing ? (
        <input type="text" value={newTask} onChange={handleChange} />
      ) : (
        <span onClick={toggleCompletr}
        style={{textDecoration : completed ? 'line-through' : 'none'}}
        >{task}</span>
      )}
      <div>
        {editing ? (
          <Button onClick={handleSave} type ="submit">Save</Button>
        ) : (
          <Button onClick={handleEdit}>Edit</Button>
        )}
        <Button onClick={() => removeTask(index)}>Remove</Button>
      </div>
    </div>

  );
};
export default Task;