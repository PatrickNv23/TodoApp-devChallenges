import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/TaskCard.module.css'

export default function TaskCard({ data }) {
  const { addToCompletedTasks, addToActiveTasks } = useContext(TaskContext);

  return (
    <div className={styles.containerTaskCard}>
      <input type="checkbox" checked={data.isCompleted} onChange={(e) => {
        e.target.checked ? addToCompletedTasks(data.description) : addToActiveTasks(data.description)
      }} />
      <p className={data.isCompleted ? styles.textContentTask : ""}>{data.description}</p>
    </div>
  )
}
