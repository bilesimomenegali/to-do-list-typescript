import styles from './InputBar.module.css'
import plusIcon from '../assets/plus.svg'


export function InputBar () {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder='Add a new task'/>
      <button className={styles.button}>
        Add
        <img src={plusIcon}/>
      </button>
    </div>
  )
}