import React, { useEffect, useState } from 'react'
import data from './data.json'

import Items from './components/Items.jsx'
import '../src/App.css'
import FormAdd from './components/FormAdd.jsx'


const App = () => {

  const [todos, setTodo] = useState([])
  const [value, setValue] = useState("")
  const [priority, setPriority] = useState('low')
  useEffect(() => {
    setTodo(data); // Sử dụng dữ liệu từ tệp JSON đã được import
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      task: value,
      priority: priority,
      status: "To Do",
      id: new Date()
    }
    setTodo([...todos, newTodo])
    setValue("")
  };

  const deleteTodo = (id) => {
    const items = todos.filter(el => el.id !== id)
    setTodo(items)
  }
  const handlePriorityChange = (select) => {
    setPriority(select)
  }
  return (

    <div id='todo'>
      <FormAdd handleSubmit={handleSubmit} value={value} setValue={setValue} handlePriorityChange={handlePriorityChange}
        priority={priority} />
      <Items
        todos={todos}
        deleteTodo={deleteTodo}
      />
      {/* <FormAdd/> */}
    </div>

  )
}

export default App