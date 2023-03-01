import { NewTask } from "./NewTask";
import { Task } from "./Task";
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <main>
      <NewTask />
      <div className={styles.tasksCounter}>
        <p className={styles.createdTasksCounter}>Tarefas criadas<span>0</span></p>
        <p className={styles.completedTasksCounter}>Concluídas<span>0 de 0</span></p>
      </div>
      <section className={styles.tasksContainer}>
        <Task />
        <Task />
      </section>
    </main>
  )
}