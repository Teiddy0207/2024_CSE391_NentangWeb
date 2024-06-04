import React from 'react'
import Task from './Task'

const TaskList = (props) => {
    const listOfTask = props.tasks.map((task) => 
     <Task key={task.id} task = {task}/>
    )
    console.log(listOfTask)
    return (
        <div className='container-sm border border-black  bg-dark-subtle' >
            {/* <Task />
            <Task />
            <Task /> */}
{listOfTask}
            
        </div>
    )
}

export default TaskList