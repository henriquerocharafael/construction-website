import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

export function SearchForm() {
  return (
    <>
      <form action="" className={styles.search_form}>
        <input
          type="search"
          name=""
          placeholder="pesquisar..."
          id="search-box"
        />
        <label htmlFor="search-box">
          <FontAwesomeIcon icon={faSearch} />
        </label>
      </form>
    </>
  );
}
