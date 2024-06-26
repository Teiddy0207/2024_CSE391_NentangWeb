import React, { useState,useEffect  } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import data from './data.json';
const Table = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        // Sử dụng setTimeout để giả lập việc fetch dữ liệu từ server (nếu cần thiết)
        const fetchData = () => {
            // Giả lập thời gian delay để giống với việc fetch từ server
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
