import paw from "../../assets/images/paw.svg";
import zoetis from "../../assets/images/zoetis.png";
import vetnil from "../../assets/images/vetnil.png";
import agener from "../../assets/images/agener.png";

import styles from "./styles.module.css"

export function Partners() {
  return (
    <section id="partners">
      <div className="heading">
        <img src={paw} />
        <h1 className="title">parceiros</h1>
      </div>

      {/* TODO: adjust size of all images */}
      <div className={styles.partners}>
        <img src={zoetis} />
        <img src={vetnil} />
        <img src={agener} />
      </div>
    </section>
  )
}
