import React from 'react'

const Header = () => {
  return (
    <div className=' p-3 bg-info mb-3 d-flex justify-content-between'>
        <div className='fs-6 text-light'>
Thuy Loi University
        </div>
        <ul className='list-unstyled d-flex'>
          <li className='text-light'>Home</li>
          <li className='ms-3'>Store Managerment</li>
          <input type="text"  className='ms-3'placeholder='Search' />
          <button className='btn btn-dark ms-3'>Search</button>
        </ul>
    </div>
  )
}

export default Header