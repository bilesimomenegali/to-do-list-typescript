import { ChangeEvent, useState, useEffect  } from 'react';

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
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    sleep(1000);
    setInputText('');
  }

  const handleTaskDeletion = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
    console.log(id)
  }

  const handleTaskCompletion = (id: number) => {
    setTaskList(taskList.map(task => {
      if(task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return task;
    }))
  }

  useEffect(() => {
    console.log('taskList', taskList)
  }, [taskList])

  return (
    <div>
      <Header />
      <InputBar 
        handleTaskInputArea={handleTaskInputArea}
        handleTaskAddition={handleTaskAddition}
        value={inputText}
      />
      <Content taskList={taskList} handleTaskDeletion={handleTaskDeletion} handleTaskCompletion={handleTaskCompletion}/>
    </div>
  )
}