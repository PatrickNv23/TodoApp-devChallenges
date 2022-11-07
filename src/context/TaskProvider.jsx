import React, { createContext, useState } from 'react'

export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  const [tasks, setTasks] = useState([]);
  const [filterName, setFilterName] = useState("All");

  const getFilterNameForTasks = (newFilterName) => {
    setFilterName(newFilterName)
  }

  const addToTasks = (newTask) => {
    let auxiliaryTask = tasks.find((task) => task.description === newTask);
    if (tasks.includes(auxiliaryTask) || newTask === "" || newTask.trim() === "") {
      console.log("La tarea ya existe")
    } else {
      setTasks([
        ...tasks,
        {
          description: newTask,
          isCompleted: false
        }
      ])
    }
  }

  const addToCompletedTasks = (completedTask) => {
    const newTasks = tasks.map((task) => {
      if (task.description === completedTask) {
        return {
          ...task,
          isCompleted: true
        }
      }
      return task
    })
    setTasks(newTasks)
  }


  const addToActiveTasks = (activeTask) => {
    const newTasks = tasks.map((task) => {
      if (task.description === activeTask) {
        return {
          ...task,
          isCompleted: false
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  const deleteCompletedTask = (deletedTask) => {
    let newTasks = tasks.filter((task) => task.description !== deletedTask)
    setTasks(newTasks)
  }

  const deleteAllTasks = () => {
    let newTasks = tasks.filter((task) => task.isCompleted === false)
    setTasks(newTasks);
  }


  const data = {
    tasks,
    addToTasks,
    addToActiveTasks,
    addToCompletedTasks,
    deleteCompletedTask,
    deleteAllTasks,
    filterName,
    getFilterNameForTasks,
  }

  return (
    <TaskContext.Provider value={data}>
      {children}
    </TaskContext.Provider>
  )
}
