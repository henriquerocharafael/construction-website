import styles from "./styles.module.css";
import paw from "../../assets/images/paw.svg";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { boxDiv } from "./data";

import LightGallery from "lightgallery/react";
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="heading">
        <img src={paw} />
        <h1 className="title">galeria de fotos</h1>
      </div>

      <div className={styles.box_container}>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {boxDiv.map((box) => (
            <a href={box.img} key={box.id}>
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
        </LightGallery>
      </div>
    </section>
  );
}
