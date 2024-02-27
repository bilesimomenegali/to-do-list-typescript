import styles from './Task.module.css';
import { TrashSimple } from 'phosphor-react'; 

interface TaskType {
  id: number;
  task: string;
  isChecked: boolean;
  handleTaskDeletion: (id: number) => void;

}

export function Task({ id, task, handleTaskDeletion }: TaskType) {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <span>{id}{task}</span>
      <button className={styles.delete} onClick={() => {handleTaskDeletion(id)}}>
        <TrashSimple />
      </button>
    </div>
  )
}