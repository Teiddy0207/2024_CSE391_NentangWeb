import React from 'react'

const Button = (props) => {
  return (
   <div>
    <button className='custom text-center border rounded-3 bg-success'>{props.text}</button>

    </div>
  )
}

export default Button