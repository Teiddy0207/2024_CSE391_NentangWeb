import React from 'react';
import Task from './Task';

const TaskList = ({ tasks,removeTask,updateTask  , setShowTask  }) => {
    return (
        <div className='todo-container container  border  h-50 p-3 mb-3 list-unstyled bg-gradient'>
            <div className='d-flex justify-content-between mb-3  '>
                <div className="left fw-bolder ">
                    Add Task
                </div>
                <div className="right">
                    <button className='btn bg-warning' onClick={() => setShowTask(true)}>
                        Add Task
                    </button>
               
                </div>
            </div>


            {tasks.map((task, index) => (
                <Task 
                key={index} 
                index={index}
                task={task} 
                removeTask={removeTask}  
                updateTask={updateTask}/>
            ))}
        </div>
    );
};

export default TaskList;
