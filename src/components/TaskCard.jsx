import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/TaskCard.module.css'

export default function TaskCard({ data }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { addToCompletedTasks, deleteToCompletedTasks, deleteToActiveTasks, addToActiveTasks } = useContext(TaskContext);

  //console.log(isCompleted)



  return (
    <div className={styles.containerTaskCard}>
      <input type="checkbox" onChange={(e) => {
        console.log(e.target.checked)
        e.target.checked ? addToCompletedTasks(data) : deleteToCompletedTasks(data)
        setIsCompleted(!isCompleted)
      }} />
      <p className={isCompleted ? styles.textContentTask : ""}>{data}</p>
    </div>
  )
}
