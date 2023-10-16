import './ComponentS/LandingPage.css';

import Home from "./ComponentS/Home";
import About from "./ComponentS/About";
import Work from "./ComponentS/Work";

import Contact from "./ComponentS/Contact";
import Footer from "./ComponentS/Footer";
import PublicAwareness from "./ComponentS/PublicAwareness";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Home />
      <About />
      <Work />
      <PublicAwareness/>
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
