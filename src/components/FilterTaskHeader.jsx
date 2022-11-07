import React, { useRef } from 'react'
import styles from '../css_modules/FilterTaskHeader.module.css';

export default function FilterTaskHeader({ textContent, getFilterNameForTasks }) {


  const textFilter = useRef();

  // I am passing data from child component to parent component with this method
  const handleClickFilterName = (e) => {
    getFilterNameForTasks(textContent);
    console.log(textFilter.current)
  }

  return (
    <>
      <div id='containerFilterTaskHeader' className={styles.containerFilterTaskHeader}>
        <a ref={textFilter} className={styles.filterName} onClick={(e) => handleClickFilterName(e)} >{textContent}</a>
        <div className={styles.selectedFilter}>
        </div>
      </div>
    </>
  )
}
