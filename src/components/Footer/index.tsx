import styles from "./styles.module.css";
import logo from "../../assets/images/logo-topo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.contact}>
          <h2>contato</h2>
          <p>clinicaxandaine@gmail.com</p>

          <div>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.openingHours}>
          <h2>funcionamento</h2>
          <p>Aberto 24h para atender ao seu pet.</p>
        </div>
      </div>

      {/* <div className={styles.credit}>
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
      </div> */}
    </footer>
  );
}
