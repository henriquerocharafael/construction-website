import { useParams } from "react-router-dom";

export function Album() {
  const { id } = useParams();

  return (
    <div>
      <h1>Album {id}</h1>
    </div>
  );
}
