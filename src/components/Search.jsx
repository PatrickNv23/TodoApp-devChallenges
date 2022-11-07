import React, { useContext, useRef } from 'react'
import { TaskContext } from '../context/TaskProvider.jsx'
import styles from '../css_modules/Search.module.css';


export default function () {

  const { addToTasks } = useContext(TaskContext);
  const inputRef = useRef();

  const handleSubmit = () => {
    addToTasks(inputRef.current.value)
    inputRef.current.value = "";
  }



  return (
    <>
      <input className={styles.inputSearch} ref={inputRef} type="text" placeholder='add details' />
      <button className={styles.buttonSearch} onClick={() => handleSubmit()}>
        Add
      </button>
    </>
  )
}
