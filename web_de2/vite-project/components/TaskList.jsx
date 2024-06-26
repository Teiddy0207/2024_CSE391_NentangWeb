import React from 'react';
import Task from './Task';

const TaskList = ({ tasks,removeTask,updateTask  }) => {
    return (
        <div className='todo-container container  border border-primary h-50 p-3 mb-3 list-unstyled'>
            <div className='d-flex justify-content-between  '>
                <div className="left fw-bolder ">
                    Add Task
                </div>
                <div className="right">
                    <button className='btn bg-secondary'>
                        Add Task
                    </button>
               
                </div>
            </div>


            {tasks.map((task, index) => (
                <Task key={index} task={task} removeTask={() => removeTask(index)}  updateTask={updateTask}/>
            ))}
        </div>
    );
};

export default TaskList;
