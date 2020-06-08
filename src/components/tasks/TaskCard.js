import React from 'react'
import TaskList from '../../modules/Tasks/TaskList'

const LoginCard = props => {
    
    return (
        <div className='task'>
            <div className='task-content'>
                <p>{props.task.task} {props.task.date}</p>
                <label>Complete task</label>
                <input type='checkbox'></input>
                <br></br>
                <button>Edit task</button>
            </div>
        </div>
    )
}

export default LoginCard