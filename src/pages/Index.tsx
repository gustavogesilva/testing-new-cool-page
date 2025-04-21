
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
    // Add Open Sans font to document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap';
    document.head.appendChild(link);

    // Add a small delay to make the page entrance animation noticeable
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(link);
    };
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
