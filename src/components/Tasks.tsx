import { useState } from 'react'
import { NewTask } from "./NewTask";
import { Task } from "./Task";
import styles from './Tasks.module.css'

export function Tasks() {
  const [listOfTasks, setListOfTasks] = useState<string[]>(["Terminar o projeto ToDo List da RocketSeat", "Começar o curso de Github da Udemy"])

  function addNewTask(textInput: string) {
    setListOfTasks((prevState) => {
      return [...prevState, textInput]
    })
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
              <Task key={task} text={task} />
            ))}
          </section>
        )
        :
        <h1>Sem Tarefas no momento</h1>
      }

    </main>
  )
}