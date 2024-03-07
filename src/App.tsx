import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Album = lazy(() => import("./components/Projects/Albums"));
const HomePage = lazy(() => import("./components/HomePage"));

export function App() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="album/:id" element={<Album />} />
      </Routes>
    </Suspense>
  );
}
