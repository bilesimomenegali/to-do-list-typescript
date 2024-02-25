import styles from './Content.module.css';
import { Task } from './Task';

export function Content() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.created}>
          <strong>Created Tasks</strong>
          <label>5</label>
        </div>
        <div className={styles.completed}>
          <strong>Completed</strong>
          <label>2 of 5</label>
        </div>
      </header>
      <body>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </body>
    </div>
  )
}