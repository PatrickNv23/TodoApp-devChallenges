import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/TaskCard.module.css'

export default function TaskCard({ data }) {
  const { addToCompletedTasks, addToActiveTasks, filterName, deleteCompletedTask } = useContext(TaskContext);

  return (
    <div className={styles.containerTaskCard}>
      <div className={styles.containerTaskCardFlex}>

        <input className={`${styles.inputCheckbox} ${data.isCompleted ? styles.isChecked : ""}`}
          type="checkbox" checked={data.isCompleted}
          onChange={(e) => {
            e.target.checked ? addToCompletedTasks(data.description) : addToActiveTasks(data.description)
          }} />

        <p className={`${styles.taskContent} ${data.isCompleted ? styles.crossedText : ""}`}>
          {data.description}
        </p>
      </div>
      {filterName === "Completed" && <a onClick={() => deleteCompletedTask(data.description)}>
        <span className={`material-icons-outlined ${styles.iconDeleteCompletedTask}`}>
          delete
        </span>
      </a>}
    </div>
  )
}
