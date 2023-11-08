import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        Tawsif Haque
      </div>
      <div className={styles.text}>
        © All rights reserved.
      </div>
    </footer>
  )
}
