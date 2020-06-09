import React, { useState, useEffect } from 'react'
import APIManager from '../../modules/APIManager'

const TaskCard = props => {
    const [task, setTask] = useState({ task: '', date: '', completed: false })

    const completeTask = (e) => {
        e.preventDefault()
        const editedTask = {
            id: props.task.id,
            task: props.task.task,
            date: props.task.date,
            completed: true,
            userId: props.task.userId
        }
        APIManager.update('tasks', editedTask).then(props.getTasks)
    }
    const editTask = e => {
        if (e.charCode === 13) {
            e.preventDefault()
            let editedTask = {
                id: props.task.id,
                task: e.target.innerHTML,
                date: props.task.date,
                completed: props.task.completed,
                userId: props.task.userId
            }
            APIManager.update('tasks', editedTask)
        }
    }
    const deleteTask = e => {
        APIManager.delete('tasks', props.task.id).then(props.getTasks)
    }

    useEffect(() => {

    }, [task])

    return (
        <div className='task'>
            <div className='task-content'>
                <p onKeyPress={e => editTask(e)} contentEditable='true'>{props.task.task}</p>
                <p>{props.task.date}</p>
                <label>Complete task</label>
                <input type='checkbox' onClick={completeTask}></input>
                <br></br>
                <button onClick={deleteTask}>Delete task</button>
            </div>
        </div>
    )
}

export default TaskCard