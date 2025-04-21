
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center items-center relative">
        <h1 
          className={`text-2xl font-light tracking-widest text-center ${
            isScrolled ? "text-[#002A5C]" : "text-white"
          } transition-colors duration-300`}
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          ELION PARTNERS
        </h1>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`absolute right-6 ${isScrolled ? "text-[#002A5C]" : "text-white"} transition-colors duration-300`}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#002A5C] bg-opacity-95 z-40 flex items-center justify-center animate-fade-in">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-center">
            {["about", "approach", "portfolio", "news", "contact"].map((item) => (
              <div 
                key={item}
                className="py-4 text-xl md:text-2xl text-white hover:text-gray-300 cursor-pointer transition-colors"
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
