import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskProvider';
import styles from '../css_modules/CompletedTaskCard.module.css'

export default function TaskCard({ data }) {



  return (
    <div className={styles.containerCompletedTaskCard}>
      <input type="checkbox" />
      <p className={styles.textContentCompletedTask}>{data}</p>
    </div>
  )
}
