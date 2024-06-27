import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavBar } from "./NavBar";
import { SearchForm } from "./SearchForm";
//import { LoginForm } from "./LoginForm";
import { Contact } from "../Contact";
// import Logo from "../../assets/images/logo-topo.png";

import styles from "./styles.module.css";

import {
  faBars,
  faInfoCircle,
  // faSearch,
  //faUser,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  //const [loginIsOpen, setLoginIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    setSearchIsOpen(false);
    //setLoginIsOpen(false);
  }

  function toggleInfo() {
    setInfoIsOpen((infoIsOpen) => !infoIsOpen);
    setMenuIsOpen(false);
    setSearchIsOpen(false);
    //setLoginIsOpen(false);
  }

  // function toggleSearch() {
  //   setSearchIsOpen((searchIsOpen) => !searchIsOpen);
  //   setMenuIsOpen(false);
  //   setLoginIsOpen(false);
  // }

  //function toggleLogin() {
  //  setLoginIsOpen((loginIsOpen) => !loginIsOpen);
  //  setMenuIsOpen(false);
  //  setSearchIsOpen(false);
  //}

  // This is'nt working on small screens
  // Don't know if this is the correct approach
  // in React to deal with window scroll
  window.onscroll = () => {
    setMenuIsOpen(false);
    setSearchIsOpen(false);
    //setLoginIsOpen(false);
    setInfoIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo}>
        EA<span>Construções</span>
        {/* <img src={Logo} /> */}
      </a>

      {/* Couldn't use ternary operator for component here because of screen size responsivity */}
      <NavBar menuIsOpen={menuIsOpen} />

      <div className={styles.icons}>
        <div className={styles.menu_btn} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.info_btn} onClick={toggleInfo}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        {/* <div className={styles.search_btn} onClick={toggleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </div> */}
        {/* <div className={styles.login_btn} onClick={toggleLogin}>
          <FontAwesomeIcon icon={faUser} />
        </div> */}
      </div>

      {infoIsOpen && <Contact toggleInfo={toggleInfo} />}
      {searchIsOpen && <SearchForm />}
      {/* {loginIsOpen && <LoginForm />} */}
    </header>
  );
}
