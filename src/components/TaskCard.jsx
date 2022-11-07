import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/TaskCard.module.css'

export default function TaskCard({ data }) {
  const { addToCompletedTasks, addToActiveTasks, filterName, deleteCompletedTask } = useContext(TaskContext);

  return (
    <div className={styles.containerTaskCard}>
      <div className={styles.containerTaskCardFlex}>
        <input style={{ appearance: "none", width: "24px", height: "24px", border: "1px solid #828282", borderRadius: "4px" }} className={data.isCompleted ? styles.isChecked : ""} type="checkbox" checked={data.isCompleted} onChange={(e) => {
          e.target.checked ? addToCompletedTasks(data.description) : addToActiveTasks(data.description)
        }} />
        <p style={{ color: "#000000", fontSize: "18px", fontWeight: "500", paddingLeft: "7px" }} className={data.isCompleted ? styles.textContentTask : ""}>{data.description}</p>
      </div>
      {filterName === "Completed" && <a onClick={() => deleteCompletedTask(data.description)}>
        <span style={{ cursor: "pointer", width: "14px", height: "18px", paddingRight: "30px", color: "#BDBDBD" }} className="material-icons-outlined">
          delete
        </span>
      </a>}
    </div>
  )
}
