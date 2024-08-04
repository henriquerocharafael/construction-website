import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Partners } from "./components/Partners";
import { Projects } from "./components/Projects";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Partners />
      <ContactForm />
      <Footer />
    </>
  );
}
