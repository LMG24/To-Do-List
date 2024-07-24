import React from 'react'
import TaskCard from './TaskCard.js'
import { Link } from 'react-router-dom'

const TaskList = (props) => {
    const deleteTaskHandler = (id) =>{
        props.getListId(id)
    }
    const renderTaskList = props.tasks.map((task, i) => {
        return (
            <TaskCard task = {task}
                clickHandler = {deleteTaskHandler}
                key={i}/>
        )
    })
    return (
        <div className='main' style= {{margin: '5em 0em 0em 0em'}}>
            <h1>To do list</h1>
            <Link to='/add'>
                <button className = 'ui right floated button blue' style={{marginTop: '-3em'}}>Add Task</button>
            </Link>
                <div className='ui grid container'>
                    {renderTaskList}
                </div>
        </div>
    )
}

export default TaskList
