import { ChangeEvent } from 'react';

import styles from './InputBar.module.css';
import plusIcon from '../assets/plus.svg';

interface InputBarProps {
  handleTaskInputArea: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTaskAddition: () => void;
  value: string;
}

export function InputBar ( { handleTaskInputArea, handleTaskAddition, value }: InputBarProps  ){ 


  return (
    <div className={styles.wrapper}>
      <input 
        className={styles.input} 
        placeholder='Add a new task' 
        onChange={handleTaskInputArea}
        value={value}
      />
      <button 
        className={styles.button}
        onClick={handleTaskAddition}
        disabled={value === ''}
      >
        Add
        <img src={plusIcon}/>
      </button>
    </div>
  )
}