import { ChangeEvent, useState  } from 'react';

import './global.css'
import { Header } from './components/Header'
import { InputBar } from './components/InputBar'
import { Content } from './components/Content'

export interface TaskType {
  id: number;
  task: string;
  isChecked: boolean;
}

export function App () {

  const [ inputText, setInputText ] = useState<string>('');
  const [ taskList, setTaskList ] = useState<TaskType[]>([]);
9
  const handleTaskInputArea = ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputText(event.target.value);
  }

  const handleTaskAddition = () => {
    setTaskList([...taskList, {id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1, task: inputText, isChecked: false}]);
    setInputText('');
  }

  const handleTaskDeletion = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  return (
    <div>
      <Header />
      <InputBar 
        handleTaskInputArea={handleTaskInputArea}
        handleTaskAddition={handleTaskAddition}
        value={inputText}
      />
      <Content taskList={taskList} handleTaskDeletion={handleTaskDeletion}/>
    </div>
  )
}