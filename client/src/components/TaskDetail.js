import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const TaskDetail = (props) => {
    const location = useLocation()
    const newdata = location.state.data
    let {itemName, dueDate, notes} = newdata
    let localDate = new Date(dueDate)
    dueDate = localDate.toISOString().split('T')[0]
    return (
        <div className = 'ui card centered'>
                <div className = 'content'>
                    <div className='header'>
                        {itemName}
                    </div>
                    <div className = 'meta'>{dueDate}</div>
                    <div className = 'description'>
                        <p>
                            {notes}
                        </p>
                    </div>
            </div>
            <div className='ui centered grid'>
                <Link to='/'>
                <button className='ui button blue center'>
                    Back
                </button>
                </Link>
            </div>
        </div>
    )
}

export default TaskDetail