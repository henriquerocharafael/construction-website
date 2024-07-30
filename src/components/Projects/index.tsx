import styles from "./styles.module.css";
import paw from "../../assets/images/paw.svg";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { boxDiv } from "./data";

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="heading">
        <img src={paw} />
        <h1 className="title">nossos projetos</h1>
      </div>

      <div className={styles.box_container}>
        {boxDiv.map((box) => (
          <a key={box.id}>
            <div className={styles.image}>
              <img src={box.img} />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h3>{box.title}</h3>
                <p>{box.content}</p>
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
