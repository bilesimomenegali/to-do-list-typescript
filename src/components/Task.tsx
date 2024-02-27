import styles from './Task.module.css';
import { TrashSimple } from 'phosphor-react'; 

interface TaskType {
  id: number;
  task: string;
  isChecked: boolean;
  handleTaskDeletion: (id: number) => void;
  handleTaskCompletion: (id: number) => void;

}

export function Task({ id, task, isChecked, handleTaskDeletion, handleTaskCompletion }: TaskType) {
  return (
    <div className={styles.task}>
      <div  onClick={() => handleTaskCompletion(id)}>
        <input type="checkbox" checked={isChecked} />
        <span>{task}</span>
      </div>
      <div onClick={() => {handleTaskDeletion(id)}}>
        <button className={styles.delete} >
          <TrashSimple />
        </button> 
      </div>
    </div>
  )
}