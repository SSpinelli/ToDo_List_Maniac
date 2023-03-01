import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'

interface iNewTask {
  addNewTask: (taskText: string) => void
}

export function NewTask({ addNewTask }: iNewTask) {
  const [taskText, setTaskText] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addNewTask(taskText)
    setTaskText("")
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="newTask"
        id="newTask"
        placeholder='Escreva sua Tarefa...'
        value={taskText}
        onChange={handleChange}
      />
      <button type="submit" disabled={!taskText.length}>Criar <PlusCircle size={16} /></button>
    </form>
  )
}