import { ClipboardText } from 'phosphor-react'
import styles from './NoTasks.module.css'

export function NoTasks() {
  return (
    <div className={styles.noTasksContainer}>
      <ClipboardText size={100} />
      <p><strong>Você ainda não tem tarefas cadastradas</strong>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}