import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface ContactProps {
  toggleInfo: () => void;
}

export function Contact({ toggleInfo }: ContactProps) {
  return (
    <div className={`${styles.contact_info}`}>
      <div className={styles.close_contact_info} onClick={toggleInfo}>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <h3>Contato</h3>
        <p>(19) 98821-7004</p>
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h3>email</h3>
        <p>eaconstrucoes2019@gmail.com</p>
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <h3>Escritório</h3>
        <p>Campinas, SP - 13056400</p>
      </div>

      <div className={styles.share}>
        <Link to="https://www.facebook.com/veterinaria.xandaine" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="https://www.instagram.com/eaconstrucoes_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </div>
  );
}
