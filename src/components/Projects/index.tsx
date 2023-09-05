import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import { boxDiv } from "./data";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import lightgallery
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className="heading">our projects</h1>

      {/* 
        TODO: When the user click on the album i have to 
        redirect to a new page containing all images of 
        the album that was clicked
      */}
      <div className={styles.box_container}>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {boxDiv.map((box, idx) => (
            <Link key={idx} to={box.img} className={styles.box}>
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
        </LightGallery>
      </div>
    </section>
  );
}
