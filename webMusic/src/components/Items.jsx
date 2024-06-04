import React from 'react';

const Items = ({ todos, deleteTodo }) => {
    return (
        <div>
      <div className='todo-container container list-unstyled'>
    {todos.map((el, index) => (
        <div className='todoItems row align-items-center' key={index}>
            <li className="col">
                <span>Task</span>
                <br /> <strong>{el.task}</strong>
            </li>
            <li className="col">
                <span>Priority</span>
                <br /> 
                <strong className={`text-${el.priority === 'high' ? 'danger' : el.priority === 'medium' ? 'warning' : 'success'}`}>
                    {el.priority}
                </strong>
            </li>
            <li className="col d-flex align-items-center">
                {el.status}
            </li>
            <li className="col d-flex align-items-center justify-content-center">
                <i className="fa-regular fa-circle"></i>
            </li>
            <li className="col ms-auto text-end">
                <i className="fa-solid fa-pen-to-square me-3"></i>
                <i className="fa-regular fa-trash-can" onClick={() => deleteTodo(el.id)}></i>
            </li>
        </div>
    ))}
</div>

        </div>
    );
};

export default Items;
