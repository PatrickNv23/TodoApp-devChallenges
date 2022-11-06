import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'
import TaskCard from './TaskCard';
import CompletedTaskCard from './CompletedTaskCard.jsx';
export default function TaskList() {
  const { tasks, addToCompletedTasks } = useContext(TaskContext);

  return (
    <div>
      {
        tasks.allTasks.length > 0 && tasks.allTasks.map(task => {
          return <TaskCard key={task} data={task} />
        })
      }
      <hr />
      {
        tasks.activeTasks.map(task => {
          return <TaskCard key={task} data={task} />
        })
      }
      <hr />
      {
        tasks.completedTasks.map((task) => {
          return <CompletedTaskCard key={task} data={task} />
        })
      }
    </div>
  )
}
