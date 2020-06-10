import React from 'react'
import TaskCard from '../../components/tasks/TaskCard'

const TaskList = props => { 
    return (
        <div className='tasks'>
            {props.tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    getTasks={props.getTasks}
                    {...props}
                />
            ))}
        </div>
    )
}

export default TaskList