import { Header } from "./components/Header/Header"

import styles from './App.module.css'
import './global.css'
import { Profile } from "./components/Profile/Profile"
export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Profile />
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
