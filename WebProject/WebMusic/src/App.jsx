import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Menu from '../Components/Menu/Menu'
import './style.css'
import Main from '../Components/Main/Main'
import AddTask from '../Components/AddTask'
import TaskList from '../Components/TaskList'


function App() {
const [tasks,setTask] = useState([
{id:1, name:"do reactjs ex, tonight"},
{id:2, name:"do Gym ex, tonight"},

])

  return (
    <>

<AddTask/>
<TaskList tasks ={tasks}/>
{/* <AddTask/> */}
    </>
  )
}


export default App

// xóa nhầm file CSS -> để a xử lý. Tí cài thêm cái extension Prettier vào nhé