import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import { useParams } from "react-router-dom";

export function Album() {
  const { id } = useParams();

  // this will return just the album with the same id as params id
  // album.id === Number(id) && (return <img />)

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
    <div className={styles.container}>
      <h1>Album {id}</h1>

      {imageList.map((url, idx) => (
        <div key={idx} className={styles.img_card}>
          <img src={url} />
        </div>
      ))}
    </div>
  );
}
