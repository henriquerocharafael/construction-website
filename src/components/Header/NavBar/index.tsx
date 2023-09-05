import styles from "./styles.module.css";

interface MenuProps {
  menuIsOpen: boolean;
}

export function NavBar({ menuIsOpen }: MenuProps) {
  return (
    <nav
      className={`${styles.navbar} ${menuIsOpen == true ? styles.active : ""}`}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
      <a href="#blogs">Blogs</a>
    </nav>
  );
}
