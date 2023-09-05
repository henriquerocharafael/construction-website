import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews";
import { Pricing } from "./components/Pricing";
import { ContactInfo } from "./components/ContactInfo";
import { Blogs } from "./components/Blogs";
import { ClientLogo } from "./components/ClientLogo";
import { Footer } from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Pricing />
        <ContactInfo />
        <Blogs />
        <ClientLogo />
        <Footer />
      </Router>
    </>
  );
}
