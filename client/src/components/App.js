import React, {useState, useEffect} from 'react'
import CreateList from './CreateList.js'
import TaskList from './TaskList.js'
import{ Routes, Route} from 'react-router-dom'
import TaskDetail from './TaskDetail.js'
import axios from 'axios'

const App = () => {
  const [tasks, setTasks] = useState([])
  const addTasksHandler = (task) => {
    const {itemName, dueDate, notes} = task
    axios.post('http://localhost:3001/createList', {
      itemName, dueDate, notes
    }).then((response) => {
      setTasks([...tasks, task])
    })
  }

  const removeTasksHandler = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task._id !== id
    })
    axios
    .delete(`http://localhost:3001/deleteUser/${id}`)
    .then((response) => {
      console.log('Succesful')
    })
  }

  useEffect(() => {
    axios
    .get("http://localhost:3001/getUsers")
    .then((response) => {
      setTasks(response.data)
    })
  })

  return(
    <div className = 'ui container'>
      <Routes>
        <Route path = '/'
          element = {<TaskList tasks = {tasks} getListId = {removeTasksHandler}/>}
        />
        <Route path = '/add'
          element = { <CreateList addTasksHandler = {addTasksHandler}/>}
        />
        <Route path = '/taskName/:id' element = {<TaskDetail />} />
      </Routes>
    </div>
  )
}

export default App