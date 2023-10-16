import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import {
  getDownloadURL,
  listAll,
  ref,
  getStorage,
  getMetadata,
} from "firebase/storage";
import { storage } from "../../../firebase";

export function Album() {
  // const { id } = useParams();

  // this will return just the album with the same id as params id
  // album.id === Number(id) && (return <img />)

  const [imageList, setImageList] = useState<string[]>([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // Create a reference to the file whose metadata we want to retrieve
  const storageMetaData = getStorage();
  const hanburyRef = ref(storageMetaData, "images/Hanbury-South.jpg");

  const [imgName, setImgName] = useState<string[]>([]);

  // Get metadata properties
  getMetadata(hanburyRef)
    .then((metadata) => {
      // Metadata now contains the metadata for 'images/Hanbury-South.jpg'
      setImgName([...imgName, metadata.name]);
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });

  return (
    <div className={styles.container}>
      {imageList.map((url, idx) => (
        <div key={idx} className={styles.img_card}>
          <img src={url} />
          <span>{imgName}</span>
        </div>
      ))}

      <h1>
        <Link to="/">Back to HomePage</Link>
      </h1>
    </div>
  );
}
