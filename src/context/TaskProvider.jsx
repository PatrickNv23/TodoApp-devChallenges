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
    if (tasks.allTasks.includes(newTask)) {
      console.log("La tarea ya existe")
    } else {
      setTasks({
        ...tasks,
        allTasks: [...tasks.allTasks, newTask],
        activeTasks: [...tasks.activeTasks, newTask]
      })
    }
  }

  const addToActiveTasks = (newActiveTask) => {
    setTasks({
      ...tasks,
      activeTasks: [...tasks.activeTasks, newActiveTask]
    })
  }

  const deleteToActiveTasks = (activeTask) => {
    setTasks({
      ...tasks,
      activeTasks: tasks.activeTasks.filter((task) => task !== activeTask)
    })
  }

  const addToCompletedTasks = (newCompletedTask) => {
    if (tasks.completedTasks.includes(newCompletedTask)) {
      console.log("La tarea ya existe")
    } else {
      setTasks({
        ...tasks,
        activeTasks: tasks.activeTasks.filter((task) => task !== newCompletedTask),
        completedTasks: [...tasks.completedTasks, newCompletedTask]
      })
    }

    //console.log(tasks.completedTasks)
  }


  const deleteToCompletedTasks = (completedTask) => {
    setTasks({
      ...tasks,
      activeTasks: [...tasks.activeTasks, completedTask],
      completedTasks: tasks.completedTasks.filter((task) => task !== completedTask)
    })
  }

  const deleteAllToCompletedTasks = () => {
    setTasks({
      ...tasks,
      completedTasks: []
    })
  }

  const data = {
    tasks,
    addToAllTasks,
    addToActiveTasks,
    addToCompletedTasks,
    deleteToCompletedTasks,
    deleteAllToCompletedTasks,
    deleteToActiveTasks
  }

  return (
    <TaskContext.Provider value={data}>
      {children}
    </TaskContext.Provider>
  )
}
