import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/TaskCard.module.css'

export default function TaskCard({ data }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { addToCompletedTasks } = useContext(TaskContext);

  console.log(isCompleted)

  useEffect(() => {
    if (isCompleted) {
      addToCompletedTasks(data)
    }
  }, [isCompleted])

  return (
    <div className={styles.containerTaskCard}>
      <input type="checkbox" onChange={() => {
        setIsCompleted(!isCompleted)

      }} />
      <p className={isCompleted ? styles.textContentTask : ""}>{data}</p>
    </div>
  )
}
