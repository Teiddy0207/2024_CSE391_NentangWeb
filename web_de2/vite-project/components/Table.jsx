import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import data from './data.json';

const Table = () => {
    const [tasks, setTasks] = useState([]);
    const [showTask, setShowTask] = useState(false)
    useEffect(() => {
        // Giả lập việc fetch dữ liệu từ server (ở đây sử dụng data từ file data.json)
        const fetchData = () => {
            setTimeout(() => {
                setTasks(data.tasks); // Gán dữ liệu từ data.json vào state tasks
            }, 1000); // Giả lập delay 1 giây
        };

        fetchData();
    }, []);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (id) => {
        const newTasks = tasks.filter((task, index) => index !== id);
        setTasks(newTasks);
    };

    const updateTask = (id, updatedTask) => {
        const newTasks = tasks.map((task, index) => (index === id ? updatedTask : task));
        setTasks(newTasks);
    };

    return (
        <div>
            <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask} setShowTask={setShowTask}/>
            {showTask && <AddTask addTask={addTask} />}
        </div>
    );
};

export default Table;
