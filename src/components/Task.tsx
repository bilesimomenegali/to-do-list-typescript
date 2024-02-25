import styles from './Task.module.css';
import { TrashSimple } from 'phosphor-react'; 

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a laborum minus voluptatibus debitis illum provident nulla eligendi fuga ipsa. Hic quos odio laborum unde accusamus. Nihil recusandae neque dolorum.</span>
      <button className={styles.delete}>
        <TrashSimple />
      </button>
    </div>
  )
}