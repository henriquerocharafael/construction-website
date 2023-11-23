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
        <a className={styles.btn} href="#contact">
          Contact
        </a>
      </div>

      <div className={styles.credit}>
        criado por{" "}
        <span>
          <a
            href="https://www.linkedin.com/in/rafael-isid%C3%B3rio-aa48b1230/"
            target="__blank"
          >
            Rafael Isidório
          </a>
        </span>{" "}
        | todos direitos reservados!
      </div>
    </footer>
  );
}
