import React, { useContext, useRef } from 'react'
import { TaskContext } from '../context/TaskProvider.jsx'
export default function () {

  const { tasks, addToAllTasks, addToActiveTasks } = useContext(TaskContext);
  const inputRef = useRef();

  // const handleInputSearch = (e) => {
  //   e.preventDefault();
  //   addToAllTasks(e.target.value);
  //   addToActiveTasks(e.target.value);
  // }


  const handleSubmit = () => {
    addToAllTasks(inputRef.current.value)
    addToActiveTasks(inputRef.current.value)
    console.log(inputRef.current.value)
    inputRef.current.value = "";
  }



  return (
    <div>
      <input ref={inputRef} type="text" placeholder='add details' />
      <button onClick={() => handleSubmit()}>
        add
      </button>
    </div>
  )
}
