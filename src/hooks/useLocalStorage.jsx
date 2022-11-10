import { useEffect } from "react";

const useLocalStorage = (tasks, setTasks) => {
  useEffect(() => {
    let tasksStorage = JSON.parse(window.localStorage.getItem("tasks"));
    tasksStorage && setTasks(tasksStorage);
  }, [])

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
}

export default useLocalStorage;