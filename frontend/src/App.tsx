import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews";
import { ContactInfo } from "./components/ContactInfo";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <ContactInfo />
      <Footer />
    </>
  );
}
