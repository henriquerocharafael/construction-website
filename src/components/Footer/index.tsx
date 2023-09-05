import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a className={styles.btn} href="#home">
          Home
        </a>
        <a className={styles.btn} href="#about">
          About
        </a>
        <a className={styles.btn} href="#services">
          Services
        </a>
        <a className={styles.btn} href="#projects">
          Projects
        </a>
        <a className={styles.btn} href="#pricing">
          Pricing
        </a>
        <a className={styles.btn} href="#contact">
          Contact
        </a>
        <a className={styles.btn} href="#blogs">
          Blogs
        </a>
      </div>

      <div className={styles.credit}>
        created by <span>mr. web designer</span> | all rights reserved!
      </div>
    </footer>
  );
}
