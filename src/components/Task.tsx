import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" />
      <p>Mensagem padrão de uma taskMensagem padrão de uma taskMensagem padrão de uma taskMensagem padrão de uma taskMensagem padrão de uma taskMensagem padrão de uma </p>
      <Trash size={20} />
    </div>
  )
}