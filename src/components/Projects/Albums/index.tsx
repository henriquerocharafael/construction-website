import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import { Link, useParams } from "react-router-dom";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

function Album() {
  const { id } = useParams();

  const [imageList, setImageList] = useState<string[]>([]);
  const imageListRef = ref(storage, `images/${id}`);

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className={styles.album}>
      <Link to="/" className={styles.btn}>
        página inicial
      </Link>

      <div className={styles.gallery}>
        <LightGallery plugins={[lgZoom, lgThumbnail]} mode="lg-fade">
          {imageList.map((url, idx) => (
            <div key={idx} data-src={url} className={styles.img_card}>
              <Link to="#" key={idx}>
                <img src={url} />
              </Link>
            </div>
          ))}
        </LightGallery>
      </div>

      <footer className={styles.footer}>
        <div className={styles.credit}>
          criado por{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/rafael-isid%C3%B3rio-aa48b1230/"
              target="__blank"
            >
              Rafael Isidório
            </a>
          </span>{" "}
          | todos direitos reservados!
        </div>
      </footer>
    </div>
  );
}

export default Album;
