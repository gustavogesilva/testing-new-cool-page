
import { useRef, useEffect, useState } from "react";

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  category: string;
}

const PropertyCard = ({
  property,
  delay,
  isVisible,
}: {
  property: Property;
  delay: number;
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-80 bg-cover bg-center w-full transition-all duration-500"
        style={{
          backgroundImage: `url(${property.image})`,
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0.7 }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="transform transition-transform duration-300" style={{ transform: isHovered ? "translateY(-10px)" : "translateY(0)" }}>
          <p className="text-sm font-medium mb-1 opacity-80">{property.category}</p>
          <h3 className="text-xl font-bold mb-1">{property.title}</h3>
          <p className="mb-3">{property.location}</p>
          <button
            className={`text-sm px-4 py-2 border border-white rounded-sm hover:bg-white hover:text-[#002A5C] transition-all duration-300 transform ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
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

  const properties: Property[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486334803289-cf5f3acb8953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Gateway Commerce Center",
      location: "Miami, FL",
      category: "Industrial",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Northside Logistics",
      location: "Seattle, WA",
      category: "Logistics",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Central Distribution Hub",
      location: "Chicago, IL",
      category: "Industrial",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      title: "Urban Retail Center",
      location: "Boston, MA",
      category: "Retail",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Tech District Office",
      location: "San Francisco, CA",
      category: "Office",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      title: "Suburban Retail Plaza",
      location: "Denver, CO",
      category: "Retail",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We invest in strategically located properties across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#002A5C] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
