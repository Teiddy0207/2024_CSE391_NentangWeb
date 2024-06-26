import React, { useState } from 'react';
import validator from 'validator';

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('low');
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // const handleInputChange = (e) => {
    //     const input = e.target.value;
    //     const wordCount = input.trim().split(/\s+/).length;

    //     if (wordCount > 10) {
    //         setError('Task cannot be more than 10 words');
    //         setIsButtonDisabled(true);
    //     } else {
    //         setError('');
    //         setIsButtonDisabled(false);
    //         setTask(input);
    //     }
    // };

  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const wordCount = validator.trim(task).split(/\s+/).length;
        
    //     if (task.trim() && wordCount <= 10) {
    //         addTask({ name: task, priority });
    //         setTask('');
    //     } else if (wordCount > 10) {
    //         setError('Task cannot be more than 10 words');
    //         setIsButtonDisabled(true);
    //     }
    // };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setTask(input);
        if (input.length > 10) {
            setError('Tên Task không được quá 100 kí tự.');
                      setIsButtonDisabled(true);
        } else {
            setError('');
            setIsButtonDisabled(false);
            setTask(input);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() && task.length <= 10) {
            addTask({ name: task, priority });
            setTask('');
            setPriority('low'); // Reset priority after adding task
        }
    };
    return (
        <div>
            <div className='container bg-secondary-subte border border-primary h-50' id="form-fill">
                <header className='d-flex justify-content-between'>
                    <div className="left fw-bolder">
                        Add Task
                    </div>
                    <div className="right">
                        x
                    </div>
                </header>
                <main>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <input type="text"
                            className="form-control shadow-sm p-2 border rounded-4 border-body-tertiary mb-3"
                            placeholder="Type your task here"
                            value={task}
                            onChange={handleInputChange}
                        />
                        {error && <div className="text-danger">{error}</div>}
                    </form>
                    <div>Priority</div>
                    <div className="mb-2">
                        <button
                            type="button"
                            className={`btn btn-sm me-2 ${priority === 'high' ? 'btn-danger' : 'btn-outline-danger'}`}
                            onClick={() => setPriority('high')}
                        >
                            High
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm me-2 ${priority === 'medium' ? 'btn-warning' : 'btn-outline-warning'}`}
                            onClick={() => setPriority('medium')}
                        >
                            Medium
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm me-2 ${priority === 'low' ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={() => setPriority('low')}
                        >
                            Low
                        </button>
                    </div>
                    <div className="d-flex justify-content-end mb-2">
                        <button className="custom text-center border rounded-3 f btn btn-sm bg-dark-subtle text-light"
                            id="addBtn" type='submit'
                            onClick={handleSubmit}
                            disabled={isButtonDisabled} // Disable button based on state
                        >
                            Add
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddTask;
