import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'
import TaskCard from './TaskCard';
import styles from '../css_modules/TaskList.module.css';
export default function TaskList({ filterName }) {


  const { tasks, deleteAllTasks } = useContext(TaskContext);

  const handleButtonDeleteAllTasks = () => {
    if (filterName === "Completed" && tasks.length > 0) {
      return <div className={styles.containerButtonDeleteAllTasks}>
        <button onClick={() => deleteAllTasks()} className={styles.buttonDeleteAllTasks}>
          <span style={{ fontSize: "15px" }} className="material-icons-outlined">
            delete
          </span>
          <span className={styles.textButtonDeleteAll}>
            delete all
          </span>
        </button>
      </div>
    }
  }

  return (
    <div className={styles.containerTaskList}>
      {
        filterName === "All" && tasks.map((task) => {
          return <div key={task.description}>
            <TaskCard data={task} />
          </div>
        })
      }
      {
        filterName === "Active" && tasks.map((task) => {
          if (!task.isCompleted) {
            return <div key={task.description}>
              <TaskCard data={task} />
            </div>
          }
        })
      }
      {
        filterName === "Completed" && tasks.map((task) => {
          if (task.isCompleted) {
            return <div key={task.description} >
              <TaskCard data={task} />
            </div>
          }
        })
      }

      {
        handleButtonDeleteAllTasks()
      }
    </div >
  )
}
