import { boxDiv } from "./data";
import styles from "./styles.module.css";
// import obraVideo from "../../assets/videos/obra-video.mp4";
import vetCare from "../../assets/videos/vetcare.mp4";
import paw from "../../assets/images/paw.svg";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="heading">
        <img src={paw} />
        <h1 className="title">sobre nós</h1>
      </div>

      <div className={styles.row}>
        <div className={styles.video}>
          <video src={vetCare} loop muted autoPlay></video>
        </div>

        <div className={styles.content}>
          <h3>oferecemos o melhor serviço, do básico ao acabamento</h3>
          <p>
            Nossa empresa possui mais de 5 anos de atuação do ramo da construção
            civil, período esse em que deixamos muitos clientes satisfeitos pelo
            caminho.
          </p>
          <a href="#services" className={styles.btn}>
            Leia mais
          </a>
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
