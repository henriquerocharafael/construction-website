import { About } from "../About";
import { Services } from "../Services";
import { Projects } from "../Projects";
import { ContactForm } from "../ContactForm";
import { Home } from "../Home";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Reviews } from "../Reviews";

function HomePage() {
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

export default HomePage;
