import React, { useState, useEffect } from 'react'
import '../../components/tasks/Tasks.css'
import TaskList from './TaskList'
import APIManager from '../APIManager'
import { handleFieldChange } from '../helper';

const Tasks = () => {
    const [showInput, setShowInput] = useState(false);
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({task: '', date: ''})

    const createTask = (e) => {
        e.preventDefault()
        if (task.task === '' || task.date === '') {
            alert('Please enter all fields.')
        } else {
            task.completed = false
            task.userId = 1
            APIManager.post('tasks', task).then(getTasks())
            setTask({task: '', date: ''})
        }
    }
    const getTasks = () => {
        return APIManager.getCompleted('tasks').then(tasks => setTasks(tasks))
    }

    useEffect(() => {
        getTasks()
    }, [])
            
    return (
        <>
            <div>
                <button onClick={() => setShowInput(!showInput)}>New task</button>
                {showInput && <div className='input'>
                    <h1>Enter a task</h1>
                    <label>New task name</label>
                    <input type='text' required id='task' value={task.task} onChange={e => {handleFieldChange(e, task, setTask)}}></input>
                    <label>Expected completion date</label>
                    <input type='date' required id='date' value={task.date} onChange={e => {handleFieldChange(e, task, setTask)}}></input>
                    <button type='submit' onClick={createTask}>Submit</button>
                </div>}
            </div>
            <div>
                <TaskList tasks={tasks} getTasks={getTasks}/>
            </div>
        </>
    );
}

export default Tasks