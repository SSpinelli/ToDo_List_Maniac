import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface iTask {
  data: {
    content: string;
    id: string;
    isCompleted: boolean;
  },
  onDeleteTask: (id: string) => void,
  onChangeStatusOfTask: (id: string) => void
}

export function Task({ data: { content, id, isCompleted }, onDeleteTask, onChangeStatusOfTask }: iTask) {
  function handleClickInTrash() {
    onDeleteTask(id)
  }

  function handleCheckbox() {
    onChangeStatusOfTask(id)
  }

  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" onChange={handleCheckbox} checked={isCompleted} />
      <p className={isCompleted ? styles.completedP : ''}>{content}</p>
      <Trash size={20} onClick={handleClickInTrash} />
    </div>
  )
}