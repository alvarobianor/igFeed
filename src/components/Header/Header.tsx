import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/src/assets/ignite-logo.svg" alt="logo" />
    </header>
  )
}