import styles from '../css_modules/FilterTaskHeader.module.css';
export default function FilterTaskHeader({ textContent, getFilterNameForTasks }) {

  return (
    <>
      <div id='containerFilterTaskHeader' className={styles.containerFilterTaskHeader}>
        <a className={styles.filterName} onClick={() => { getFilterNameForTasks(textContent) }} >
          {textContent}
        </a>
        <div style={{ width: "100%" }}>
        </div>
      </div>
    </>
  )
}

