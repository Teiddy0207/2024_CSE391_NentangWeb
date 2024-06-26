import React, { useState } from 'react';

const Task = ({ index, task, removeTask, updateTask }) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task.name);
    const [updatedPriority, setUpdatedPriority] = useState(task.priority);

    const handleUpdate = () => {
        updateTask(index, { name: updatedTask, priority: updatedPriority });
        setEditMode(false);
    };

    const handleInputChange = (e) => {
        setUpdatedTask(e.target.value);
    };

    const handlePriorityChange = (priority) => {
        setUpdatedPriority(priority);
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
                {editMode ? (
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
                {editMode ? (
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
            <div className="col d-flex align-items-center">
               
                <br />
                {editMode ? (
                    <span>{getStatusLabel()}</span>
                ) : (
                    <span>{getStatusLabel()}</span>
                )}
            </div>
            <div className="col d-flex align-items-center justify-content-center">
               
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
