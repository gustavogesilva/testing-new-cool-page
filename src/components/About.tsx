import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef, useState } from "react";
const About = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapScale, setMapScale] = useState(1);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isInView && !hasScrolled) {
        setHasScrolled(true);

        // Start zoom animation after section is in view
        setTimeout(() => {
          setMapScale(1.3);
        }, 500);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);
  return <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Map */}
      <div ref={mapRef} className="absolute inset-0 z-0 opacity-10" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1522559841680-6d55e0c1b944?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: `scale(${mapScale})`,
      transition: "transform 8s ease-out",
      filter: "invert(1) grayscale(1)"
    }}>
        {/* Map points */}
        {[{
        left: '20%',
        top: '30%'
      }, {
        left: '55%',
        top: '20%'
      }, {
        left: '70%',
        top: '45%'
      }, {
        left: '35%',
        top: '60%'
      }, {
        left: '80%',
        top: '70%'
      }].map((pos, idx) => <div key={idx} className="absolute w-3 h-3 bg-black rounded-full" style={{
        left: pos.left,
        top: pos.top,
        transform: "translate(-50%, -50%)"
      }} />)}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">dfd</h2>
            <p className="text-lg text-gray-700">
              Elion Partners is a vertically integrated private equity real estate investment firm focused on the industrial sector. We develop, own, and operate assets with a strategic focus on supply chain infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{
          number: "$2B+",
          title: "Assets Under Management",
          description: "Across the United States",
          delay: 100
        }, {
          number: "15+",
          title: "Years Experience",
          description: "In real estate investment",
          delay: 300
        }, {
          number: "50+",
          title: "Properties",
          description: "Strategically located",
          delay: 500
        }].map((item, index) => <ScrollReveal key={index} delay={item.delay}>
              <div className="text-center">
                <p className="text-5xl font-bold mb-3 text-[#002A5C]">{item.number}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 font-light">{item.description}</p>
              </div>
            </ScrollReveal>)}
        </div>
      </div>
    </section>;
};
export default About;