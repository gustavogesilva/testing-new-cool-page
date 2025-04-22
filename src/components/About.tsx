
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

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
            <h2 className="text-lg font-semibold mb-2 text-gray-600 tracking-wider">ABOUT ELION</h2>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">At a glance</h3>
            <p className="text-xl text-gray-700">
              World-class expertise, having advised on some of the most relevant and complex deals in several sectors globally
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: "€120bn+",
              title: "Aggregate Deal Value",
              description: "",
              delay: 100
            },
            {
              number: "100+",
              title: "Deals Closed",
              description: "",
              delay: 200
            },
            {
              number: "80+",
              title: "Cross-border Deals",
              description: "",
              delay: 300
            },
            {
              number: "15+",
              title: "Countries with Deal Experience and Strong Network",
              description: "",
              delay: 400
            }
          ].map((item, index) => (
            <ScrollReveal key={index} delay={item.delay}>
              <div className="text-center">
                <p className="text-5xl font-bold mb-3 text-[#002A5C]">{item.number}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-500 font-light">{item.description}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
