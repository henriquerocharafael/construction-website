import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Album } from "./components/Projects/Albums";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="album/:id" element={<Album />} />
    </Routes>
  );
}
