
import { useRef, useEffect, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
              About Elion Partners
            </h2>
            <p className="text-lg text-gray-700">
              Elion Partners is a vertically integrated private equity real estate investment firm focused on the industrial sector. We develop, own, and operate assets with a strategic focus on supply chain infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Experience",
              description:
                "Over $2 billion in real estate assets managed across the United States.",
              delay: 100,
            },
            {
              title: "Expertise",
              description:
                "Specialized knowledge in industrial and logistics real estate investment.",
              delay: 300,
            },
            {
              title: "Strategy",
              description:
                "Value-add approach focusing on high-growth markets and strategic locations.",
              delay: 500,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${item.delay}ms` : "0ms",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#002A5C]">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
