import styles from "./styles.module.css";

interface MenuProps {
  menuIsOpen: boolean;
}

export function NavBar({ menuIsOpen }: MenuProps) {
  return (
    <nav
      className={`${styles.navbar} ${menuIsOpen == true ? styles.active : ""}`}
    >
      <a href="#home">Início</a>
      <a href="#about">Sobre</a>
      <a href="#services">Serviços</a>
      <a href="#gallery">Galeria</a>
      <a href="#reviews">Depoimentos</a>
      <a href="#partners">Parceiros</a>
      <a href="#contact">Contato</a>
    </nav>
  );
}
