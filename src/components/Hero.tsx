
import { useEffect, useState } from "react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="relative h-screen w-full flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/videoblocks-a-passenger-jet-aircraft-lands-against-blue-sky-background_seppl3emog__5bfec0b82a1a5130455c9b309d88084a__P360.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-24 md:pb-32 relative z-20">
        <div className={`max-w-2xl transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 lg:text-4xl">The Elden Way: Excellence. Integrity. World-class International Expertise and Network. Superior Results for Our Clients.</h1>
        </div>
      </div>

      <div onClick={scrollToContent} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <svg className="w-10 h-10 text-white hover:text-blue-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>;
};
export default Hero;
