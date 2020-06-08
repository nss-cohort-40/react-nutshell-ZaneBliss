import React, { useState, useEffect } from 'react'
import APIMananger from '../APIManager'
import TaskCard from '../../components/tasks/TaskCard'

const TaskList = props => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return APIMananger.getAll('tasks').then(tasks => setTasks(tasks))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div className='tasks'>
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    {...props}
                />
            ))}
        </div>
    )
}

export default TaskList