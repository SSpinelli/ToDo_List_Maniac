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
  const numberOfCompletedTasks = listOfTasks.filter((task) => task.isCompleted).length;

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

  function onChangeStatusOfTask(id: string) {
    const updatedListOfTasks = listOfTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setListOfTasks(updatedListOfTasks)
  }

  function organizeTasks() {
    const completedTasks = listOfTasks.filter((task) => task.isCompleted);
    const incompletedTasks = listOfTasks.filter((task) => !task.isCompleted);

    return [...incompletedTasks, ...completedTasks]
  }

  return (
    <main>
      <NewTask addNewTask={addNewTask} />
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasksCounter}>Tarefas criadas<span>{listOfTasks.length}</span></p>
        <p className={styles.completedTasksCounter}>Concluídas<span>{numberOfCompletedTasks} de {listOfTasks.length}</span></p>
      </div>
      {listOfTasks.length
        ? (
          <section className={styles.tasksContainer}>
            {organizeTasks().map((task) => (
              <Task key={task.id} data={task} onDeleteTask={onDeleteTask} onChangeStatusOfTask={onChangeStatusOfTask} />
            ))}
          </section>
        )
        :
        <NoTasks />
      }

    </main>
  )
}