
import { useRef, useEffect, useState } from "react";

const ApproachCard = ({
  number,
  title,
  description,
  delay,
  isVisible,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}) => (
  <div
    className={`bg-white p-8 rounded-lg shadow-md transition-all duration-500 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
  >
    <div className="text-[#002A5C] text-4xl font-bold mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-3 text-[#002A5C]">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Approach = () => {
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

  const approaches = [
    {
      number: "01",
      title: "Identify",
      description:
        "We identify assets in high-growth markets with strong fundamentals and potential for value creation.",
      delay: 100,
    },
    {
      number: "02",
      title: "Acquire",
      description:
        "Our acquisition strategy focuses on assets with strong upside potential through operational improvements.",
      delay: 300,
    },
    {
      number: "03",
      title: "Optimize",
      description:
        "We implement strategic enhancements to increase property value and operational efficiency.",
      delay: 500,
    },
    {
      number: "04",
      title: "Scale",
      description:
        "Our portfolio grows through disciplined expansion in target markets across the country.",
      delay: 700,
    },
  ];

  return (
    <section
      id="approach"
      className="py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our disciplined investment process drives consistent results across our portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => (
            <ApproachCard
              key={index}
              number={approach.number}
              title={approach.title}
              description={approach.description}
              delay={approach.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
