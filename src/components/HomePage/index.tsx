import { About } from "../About";
import { Services } from "../Services";
import { Projects } from "../Projects";
import { ContactInfo } from "../ContactInfo";
import { Home } from "../Home";
import { Header } from "../Header";
import { Footer } from "../Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default HomePage;
