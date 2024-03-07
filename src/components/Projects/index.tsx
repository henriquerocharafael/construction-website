import styles from "./styles.module.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { boxDiv } from "./data";

import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className="heading">nossos projetos</h1>

      <div className={styles.box_container}>
        {boxDiv.map((box, idx) => (
          <Link key={idx} to={`/album/${box.id}`} className={styles.box}>
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
          </Link>
        ))}
      </div>
    </section>
  );
}
