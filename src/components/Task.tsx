import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface iTask {
  text: string;
}

export function Task({ text }: iTask) {
  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" />
      <p>{text}</p>
      <Trash size={20} />
    </div>
  )
}