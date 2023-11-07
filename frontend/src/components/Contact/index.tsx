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
    <div className={`${styles.contact_info} ${styles.active}`}>
      <div className={styles.close_contact_info} onClick={toggleInfo}>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <h3>phone number</h3>
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h3>email address</h3>
        <p>shaikhanas@gmail.com</p>
        <p>anasbhai@gmail.com</p>
      </div>

      <div className={styles.info}>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <h3>office address</h3>
        <p>mumbai, india - 400104</p>
      </div>

      <div className={styles.share}>
        <Link to="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </div>
  );
}
