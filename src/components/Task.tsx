import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface iTask {
  data: {
    content: string;
    id: string;
    isCompleted: boolean;
  },
  onDeleteTask: (id: string) => void
}

export function Task({ data: { content, id, isCompleted }, onDeleteTask }: iTask) {
  function handleClickInTrash() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" />
      <p>{content}</p>
      <Trash size={20} onClick={handleClickInTrash} />
    </div>
  )
}