import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1>App</h1>
      </div>
    </div>
  )
}
