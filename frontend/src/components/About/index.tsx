import { Link } from "react-router-dom";
import { boxDiv } from "./data";

import styles from "./styles.module.css";

import obraVideo from "../../assets/videos/obra-video.mp4";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <h1 className="heading">sobre nós</h1>

      <div className={styles.row}>
        <div className={styles.video}>
          <video src={obraVideo} loop muted autoPlay></video>
        </div>

        <div className={styles.content}>
          <h3>We will provide you the best work which you dreamt for!</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            architecto assumenda accusantium optio maiores corporis voluptatem
            odit praesentium, vero impedit.
          </p>
          <Link to="#services" className={styles.btn}>
            Leia mais
          </Link>
        </div>
      </div>

      <div className={styles.box_container}>
        {boxDiv.map((box, idx) => (
          <div key={idx} className={styles.box}>
            <h3>{box.title}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
