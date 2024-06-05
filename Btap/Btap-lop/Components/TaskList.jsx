import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask,  updateTask}) => {
  return (
    <div >
      {tasks.map((task, index) => (
        <Task key={index}
         index={index} 
         task={task} 
         removeTask={removeTask}
          updateTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskList;
