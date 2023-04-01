import { Header } from "./components/Header/Header"

import styles from './App.module.css'
import './global.css'
export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <div className="content">
          <strong>post</strong>
          <strong>post</strong>
          <strong>post</strong>
          <strong>post</strong>
        </div>
      </div>
    </>
  )
}
