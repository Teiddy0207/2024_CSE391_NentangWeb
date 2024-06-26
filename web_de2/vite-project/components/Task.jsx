import React, { useState } from 'react';
// import { FaRegCheckCircle } from "react-icons/fa";
// import { FaCircleNotch } from "react-icons/fa6";

const Task = ({ index, task, removeTask, updateTask }) => {
    const [editMode, setEditMode] = useState(false);// dung de xac dinh xem cos dang chinh sua l
    const [updatedTask, setUpdatedTask] = useState(task.name);// luu tru noi dung chinh sua
    //hook, luu tru dc gia tri khoi tao/ khi render lan dau se thiet lat updateTask voi ten cua nhiem vu
    const [updatedPriority, setUpdatedPriority] = useState(task.priority); // luu tru do uu tien

    const handleUpdate = () => {
        updateTask(index, { name: updatedTask, priority: updatedPriority });// dc dung khi nhan nut saave, goi prop updateTask de cap nhat task
        setEditMode(false);
    };

//     updateTask: Đây là một prop được truyền vào component Task. Prop này là một hàm được định nghĩa trong component cha để cập nhật danh sách các công việc.
// index: Đây là chỉ số (index) của công việc hiện tại trong danh sách các công việc. Nó được truyền vào component Task dưới dạng prop.
// { name: updatedTask, priority: updatedPriority }: Đây là một đối tượng chứa các giá trị cập nhật của công việc, bao gồm:
// name: updatedTask: Giá trị mới của tên công việc, được lưu trữ trong state updatedTask.
// priority: updatedPriority: Giá trị mới của mức độ ưu tiên, được lưu trữ trong state updatedPriority.
    const handleInputChange = (e) => {
        setUpdatedTask(e.target.value);
    };
    //Hàm này được sử dụng để cập nhật giá trị của tên công việc 

    const handlePriorityChange = (priority) => {
        setUpdatedPriority(priority); // cap nhat muc do uu tien
    };

    const getStatusLabel = () => {
        switch (updatedPriority) {
            case 'high':
                return 'Todo';
            case 'medium':
                return 'In Progress';
            case 'low':
                return 'Done';
            default:
                return '';
        }
    };

    return (
        <div className='todoItems row align-items-center'>
            <div className="col">
                <span>Task</span>
                <br />
                {editMode ? ( // neu dang duoc chinh sua 
                    <input
                        type="text"
                        value={updatedTask}
                        onChange={handleInputChange}
                    />
                ) : (
                    <strong>{task.name}</strong>
                )}
            </div>
            <div className="col">
                <span>Priority</span>
                <br />
                {editMode ? ( // neu dang duoc chinh sua 
                    <>
                        <button
                            type="button"
                            className={`btn btn-sm me-2 ${updatedPriority === 'high' ? 'btn-danger' : 'btn-outline-danger'}`}
                            onClick={() => handlePriorityChange('high')}
                        >
                            High
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm me-2 ${updatedPriority === 'medium' ? 'btn-warning' : 'btn-outline-warning'}`}
                            onClick={() => handlePriorityChange('medium')}
                        >
                            Medium
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm me-2 ${updatedPriority === 'low' ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={() => handlePriorityChange('low')}
                        >
                            Low
                        </button>
                    </>
                ) : (
                    <strong className={`text-${task.priority === 'high' ? 'danger' : task.priority === 'medium' ? 'warning' : 'success'}`}>
                        {task.priority}
                    </strong>
                )}
            </div>
            <div className="col">
             
                <br />
                <div>
                    {editMode ? (
                        <span>{getStatusLabel()}</span>
                    ) : (
                        <span>{getStatusLabel()}</span>
                    )}
                </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
                {/* Display appropriate icon based on priority */}
                {updatedPriority === 'high' ? (
                    <></> // Empty for Todo
                ) : updatedPriority === 'medium' ? (
            <div className='col mt-4'>    
                    {/* <FaCircleNotch /> */}
                    Load 
                    </div> 
                ) : (
                 <div className='col mt-4'>
                    {/* <FaRegCheckCircle /> */}
                    DONE 
                    </div>
                )}
            </div>
            <div className="col ms-auto text-end">
                {editMode ? (
                    <>
                        <button className='btn' onClick={handleUpdate}>Save</button>
                        <button className='btn' onClick={() => setEditMode(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button className='btn' onClick={() => setEditMode(true)}>Edit</button>
                        <button className='btn' onClick={() => removeTask(index)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Task;
