import styles from "./styles.module.css";

import { boxDiv } from "./data";

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <h1 className="heading">nossos serviços</h1>

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
