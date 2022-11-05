import React, { createContext, useState, useEffect } from 'react'

export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  const [tasks, setTasks] = useState({
    allTasks: [],
    activeTasks: [],
    completedTasks: []
  });

  useEffect(() => {
    console.log("render provider")
  }, [tasks])

  const addToAllTasks = (newTask) => {
    setTasks({
      ...tasks,
      allTasks: [...tasks.allTasks, newTask]
    })
  }

  const addToActiveTasks = (newActiveTask) => {
    setTasks({
      ...tasks,
      activeTasks: [...tasks.activeTasks, newActiveTask]
    })
  }

  const addToCompletedTasks = (newCompletedTask) => {
    setTasks({
      ...tasks,
      completedTasks: [...tasks.completedTasks, newCompletedTask]
    })
    console.log(tasks.completedTasks)
  }

  const data = {
    tasks,
    addToAllTasks,
    addToActiveTasks,
    addToCompletedTasks
  }

  return (
    <TaskContext.Provider value={data}>
      {children}
    </TaskContext.Provider>
  )
}
