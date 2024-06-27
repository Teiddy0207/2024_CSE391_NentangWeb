import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faC,faTrash ,faWrench,faCircleCheck} from '@fortawesome/free-solid-svg-icons';

const Task = ({ index, task, removeTask, updateTask }) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task.name);
    const [updatedPriority, setUpdatedPriority] = useState(task.priority);
    const [percentage, setPercentage] = useState(0);
    

    useEffect(() => {
        let interval;
        if (updatedPriority === 'low') {
            interval = setInterval(() => {
                setPercentage(prevPercentage => {
                    if (prevPercentage >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prevPercentage + 7;
                });
            }, 70); // Update every 100ms
        }
        else if  (updatedPriority === 'medium') {
            interval = setInterval(() => {
                setPercentage(prevPercentage => {
                    if (prevPercentage >= 50) {
                        clearInterval(interval);
                        return 50;
                    }
                    return prevPercentage + 7;
                });
            }, 70); // Update every 100ms
        } 
        
        else {
            setPercentage(0); // Reset when priority is not 'low'
        }

        return () => {
            clearInterval(interval);
        };
    }, [updatedPriority]);

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
        <div className='todoItems row align-items-center mb-3 border rounded-pill bg-dark-subtle'>
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
            <div className="col">
                <br />
                <div>
                    <span>{getStatusLabel()}</span>
                </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
                {updatedPriority === 'high' ? (
                    <></>
                ) : updatedPriority === 'medium' ? (
                    <div className='col mt-4'>
                        {/* <FontAwesomeIcon icon={faC} /> */}
                        <CircularProgressbar
                            value={percentage}
                          
                            styles={buildStyles({
                                rotation: 0.5, // Chỉ chạy một nửa vòng
                                strokeLinecap: 'butt',
                               
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                            className='w-25 h-25'
                        />
                    </div>
                ) : (
                    <div className='col mt-4' >
                        <CircularProgressbar
                            value={percentage}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                              
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                               
                            })}
                            className=' w-25 h-25'
                        />
                      {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
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
                        <button className='btn' onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faWrench} className='text-warning' /></button>
                        <button className='btn' onClick={() => removeTask(index)}><FontAwesomeIcon icon={faTrash} className='text-danger'/></button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Task;
