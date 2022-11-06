import React, { useContext, useRef } from 'react'
import { TaskContext } from '../context/TaskProvider.jsx'
export default function () {

  const { addToTasks } = useContext(TaskContext);
  const inputRef = useRef();

  const handleSubmit = () => {
    addToTasks(inputRef.current.value)
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
