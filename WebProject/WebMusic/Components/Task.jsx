import Button from './Button' 
import React from 'react'

const Task = (props) => {
  return (
    <div className='d-flex justify-content-between  '> 
        <p className='bg'>{props.task.name}</p>
    <div className='d-flex'>
    <Button text = {"edit"}/>
    <Button  text = {"delete"}/>
    </div>
    </div>
  )
}

export default Task