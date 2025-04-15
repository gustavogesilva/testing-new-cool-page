
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Approach from "../components/Approach";
import Portfolio from "../components/Portfolio";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Portfolio />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
