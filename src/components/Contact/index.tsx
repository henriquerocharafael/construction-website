import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";
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
        <p>(19) 3226-7350</p>
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h3>email</h3>
        <p>clinicaxandaine@gmail.com</p>
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <h3>Clínica</h3>
        <p>Campinas, SP - 13054-133</p>
      </div>

      <div className={styles.share}>
        <a href="https://www.facebook.com/veterinaria.xandaine" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/eaconstrucoes_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
