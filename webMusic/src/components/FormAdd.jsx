import React from 'react'

const FormAdd = ({handleSubmit,value,setValue ,handlePriorityChange, priority}) => {
    return (
        <div>
            <div className='container-sm bg-secondary-subte border border-primary h-50 ' id="form-fill">
                <header className='d-flex justify-content-between'>
                    <div className="left fw-bolder ">
                        Add Task
                    </div>
                    <div className="right">
                        x
                    </div>
                </header>
                <main>
                  
                  
                    <form  class="form-group" onSubmit={handleSubmit}> 
                        <input type="text"
                            class="form-control shadow-sm p-2 border rounded-4 border-body-tertiary mb-3"
                            placeholder="Type your task here"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </form>
                    <div>priority</div>
                    <div className="mb-2">
                    <button
                                className={`btn btn-sm me-2 ${priority === 'high' ? 'btn-danger' : 'btn-outline-danger'}`}
                                onClick={() => handlePriorityChange('high')}
                            >
                                High
                            </button>
                            <button
                                className={`btn btn-sm me-2 ${priority === 'medium' ? 'btn-warning' : 'btn-outline-warning'}`}
                                onClick={() => handlePriorityChange('medium')}
                            >
                                Medium
                            </button>
                            <button
                                className={`btn btn-sm me-2 ${priority === 'low' ? 'btn-success text-light' : 'btn-outline-success'}`}
                                onClick={() => handlePriorityChange('low')}
                            >
                                Low
                            </button>
                    </div>
                    <div class="d-flex justify-content-end mb-2">
                <button class="custom text-center border rounded-3  f btn btn-sm bg-dark-subtle text-light" 
                id="addBtn" 
                type='submit' 
                onClick={handleSubmit} >Add</button>
                </div>
                 
                    
                </main>
              
            </div>
        </div>
    )
}

export default FormAdd