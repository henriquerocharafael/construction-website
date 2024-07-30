import styles from "./styles.module.css";
import paw from "../../assets/images/paw.svg";

import { boxDiv } from "./data";

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="heading">
        <img src={paw} />
        <h1 className="title">nossos serviços</h1>
      </div>

      <div className={styles.box_container}>
        {boxDiv.map((box, idx) => (
          <div key={idx} className={styles.box}>
            <img src={box.img} />
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
