import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const Table = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (id) => {
        const newTasks = tasks.filter((task, index) => index !== id);
        setTasks(newTasks);
    }
    const updateTask  = (id, updateTask ) =>
        {
            const newTask = tasks.map((task,index) => index !== id ? updateTask  : task)
            setTasks(newTask)
        }

    return (
        <div>
            <TaskList tasks={tasks} removeTask={removeTask} updateTask  = {updateTask } />
            <AddTask addTask={addTask} />
        </div>
    );
};

export default Table;
