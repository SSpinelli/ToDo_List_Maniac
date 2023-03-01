import { useState } from 'react'
import { NewTask } from "./NewTask";
import { NoTasks } from './NoTasks';
import { Task } from "./Task";
import styles from './Tasks.module.css'

interface iListOfTasks {
  id: string;
  content: string;
  isCompleted: boolean
}[]

export function Tasks() {
  const [listOfTasks, setListOfTasks] = useState<iListOfTasks[]>([])

  function addNewTask(textInput: string) {
    const newTaskObj = {
      content: textInput,
      isCompleted: false,
      id: `${new Date()}-${textInput}`
    }
    setListOfTasks((prevState) => {
      return [...prevState, newTaskObj]
    })
  }

  function onDeleteTask(id: string) {
    const listOfTasksWithoutRemovedOne = listOfTasks.filter((task) => task.id !== id)

    setListOfTasks(listOfTasksWithoutRemovedOne)
  }

  return (
    <main>
      <NewTask addNewTask={addNewTask} />
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasksCounter}>Tarefas criadas<span>0</span></p>
        <p className={styles.completedTasksCounter}>Concluídas<span>0 de 0</span></p>
      </div>
      {listOfTasks.length
        ? (
          <section className={styles.tasksContainer}>
            {listOfTasks.map((task) => (
              <Task key={task.id} data={task} onDeleteTask={onDeleteTask} />
            ))}
          </section>
        )
        :
        <NoTasks />
      }

    </main>
  )
}