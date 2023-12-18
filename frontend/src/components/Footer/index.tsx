import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a className={styles.btn} href="#home">
          início
        </a>
        <a className={styles.btn} href="#about">
          Sobre
        </a>
        <a className={styles.btn} href="#services">
          Serviços
        </a>
        <a className={styles.btn} href="#projects">
          Projetos
        </a>
        <a className={styles.btn} href="#contact">
          contato
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
