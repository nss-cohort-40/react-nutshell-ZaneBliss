import React, { useState, useEffect, createElement } from 'react'
import '../../components/tasks/Tasks.css'
import TaskList from './TaskList'
import APIManager from '../APIManager'
import { handleFieldChange } from '../helper';

const Tasks = () => {
    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState({name: '', date: ''})
    const [isLoading, setIsLoading] = useState(false)

    const createTask = (e) => {
        e.preventDefault()
        if (task.name === '' || task.date === '') {
            alert('Please enter all fields.')
        } else {
            task.completed = false
            task.userId = 1
            setIsLoading(true)
            console.log(task);
            
            APIManager.post('tasks', task)
        }
    }
    
    useEffect(() => {
        
    }, [])

    return (
        <>
            <div>
                <button onClick={() => setShowInput(!showInput)}>New task</button>
                {showInput && <div className='input'>
                    <h1>Enter a task</h1>
                    <label>New task name</label>
                    <input type='text' required id='name' disabled={isLoading} onChange={e => {handleFieldChange(e, task, setTask)}}></input>
                    <label>Expected completion date</label>
                    <input type='date' required id='date' disabled={isLoading} onChange={e => {handleFieldChange(e, task, setTask)}}></input>
                    <button type='submit' onClick={createTask}>Submit</button>
                </div>}
            </div>
            <div>
                <TaskList />
            </div>
        </>
    );
}

export default Tasks