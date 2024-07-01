// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";

// const Album = lazy(() => import("./components/Projects/Albums"));
// const HomePage = lazy(() => import("./components/HomePage"));

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <ContactForm />
      <Footer />
    </>
  );
}
