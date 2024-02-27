import styles from './Content.module.css';
import { Task } from './Task';
import { TaskType } from '../App';

interface ContentProps {
  taskList: TaskType[];
  handleTaskDeletion: (id: number) => void;
}

export function Content({ taskList, handleTaskDeletion }: ContentProps) {

  const createdTasks = taskList.length;
  const completedTasks = taskList.filter(task => task.isChecked).length;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.created}>
          <strong>Created Tasks</strong>
          <label>{createdTasks}</label>
        </div>
        <div className={styles.completed}>
          <strong>Completed</strong>
          <label>
            {createdTasks === 0 ? '-' : `${completedTasks} of ${createdTasks}`}
          </label>
        </div>
      </header>
      <div className={styles.taskBody}>
        {taskList.map(item => {
          return <Task 
            key={item.id} 
            id={item.id} 
            task={item.task} 
            isChecked={item.isChecked} 
            handleTaskDeletion={handleTaskDeletion}
          />
        })}
      </div>
    </div>
  )
}