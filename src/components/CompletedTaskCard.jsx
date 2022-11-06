import React, { useState, useContext, useEffect, useRef } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/CompletedTaskCard.module.css'

export default function TaskCard({ data }) {

  const { deleteToCompletedTasks } = useContext(TaskContext)
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className={styles.containerCompletedTaskCard}>
      <input type="checkbox" defaultChecked={true} onChange={(e) => !e.target.checked && deleteToCompletedTasks(data)} />
      <p className={styles.textContentCompletedTask}>{data}</p>
    </div>
  )
}
