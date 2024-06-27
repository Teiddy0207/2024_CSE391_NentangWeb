import React, { useState } from 'react'



const TableFuction = () => {
    return (
        <div className='wrap d-flex justify-content-between  p-3 bg-info'>
            <div className='logo fs-3'>
                <span>Manage <span className='text-light fw-bold'>Works</span> </span>
            </div>
            <div className='button '>
                <button className='btn bg-danger' >Tat ca</button>
                <button className='btn bg-success ms-2' >Dang khan cap</button>
                <button className='btn bg-warning  ms-2'>Tri hoan </button>
            </div>


        </div>
    )
}

export default TableFuction