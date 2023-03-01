import { PlusCircle } from 'phosphor-react'
import { FormEvent } from 'react'
import styles from './NewTask.module.css'

export function NewTask() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input type="text" name="newTask" id="newTask" placeholder='Escreva sua Tarefa...' />
      <button type="submit">Criar <PlusCircle size={16} /></button>
    </form>
  )
}