
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Approach from "../components/Approach";
import Portfolio from "../components/Portfolio";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to make the page entrance animation noticeable
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
