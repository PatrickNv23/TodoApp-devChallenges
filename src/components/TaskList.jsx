import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'
import TaskCard from './TaskCard';
export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {
        tasks.length > 0 && tasks.map((task) => {
          return <TaskCard key={task.description} data={task} />
        })
      }
      <hr />
      {
        tasks.map((task) => {
          if (!task.isCompleted) {
            return <TaskCard key={task.description} data={task} />
          }
        })
      }
      <hr />
      {
        tasks.map((task) => {
          if (task.isCompleted) {
            return <TaskCard key={task.description} data={task} />
          }
        })
      }
    </div>
  )
}
