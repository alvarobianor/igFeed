import styles from './Profile.module.css'

export function Profile() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.wallpaper} src="https://source.unsplash.com/random/?universe" alt="universe" />

      <div className={styles.profile}>
        <img className={styles.profilePicture} src="https://source.unsplash.com/random/?clown" alt="Clown" />
        <div className={styles.infos}>
          <strong>Álvaro Bianor</strong>
          <span>Web Developer</span>
        </div>

      </div>
      <footer className={styles.footer}>
        <button className={styles.edit}>Editar seu perfil</button>
      </footer>
    </aside>
  )
}

