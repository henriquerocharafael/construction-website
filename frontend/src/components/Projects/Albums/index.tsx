import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import { Link, useParams } from "react-router-dom";

export function Album() {
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
    <>
      <Link to="/" className={styles.btn}>
        Home
      </Link>

      <div className={styles.gallery}>
        {imageList.map((url, idx) => (
          <div key={idx} className={styles.img_card}>
            <img src={url} />
          </div>
        ))}
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
    </>
  );
}
