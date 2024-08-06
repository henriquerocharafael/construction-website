import paw from "../../assets/images/paw.svg";
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
        <h1>parceiro 1</h1>
        <h1>parceiro 2</h1>
        <h1>parceiro 3</h1>
      </div>
    </section>
  )
}
