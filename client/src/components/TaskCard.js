import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {
    let { _id, itemName, dueDate, notes} = props.task
    const data = {
        data: props.task
    }
    let localDate = new Date(dueDate)
    notes = notes.split(' ')
    notes = notes.slice(0,2).join(' ')
    notes += '....'
    dueDate = localDate.toISOString().split('T')[0]
    return (
    <div className='four wide column' >
        <div className='content'>
            <Link to ={{pathname:`/taskName/${_id}`}} state = {data}>
                <div className = 'header'>{itemName}</div>
            </Link>
            <div>{dueDate}</div>
            <div>{notes}</div>
            <div className = 'ui basic red button'
                onClick = {() => props.clickHandler(_id)}>Remove</div>
        </div>
    </div>
    )
}

export default TaskCard