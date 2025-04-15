
import { useRef, useEffect, useState } from "react";

const Contact = () => {
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
    <section id="contact" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team is ready to explore opportunities and answer your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#002A5C]">
              Get In Touch
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#002A5C] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#002A5C]">
              Our Offices
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-medium mb-2 text-[#002A5C]">
                  Headquarters
                </h4>
                <p className="text-gray-700">
                  1250 Connecticut Ave NW, Suite 700
                  <br />
                  Washington, DC 20036
                </p>
                <p className="mt-2 text-gray-700">
                  Phone: (202) 555-1234
                  <br />
                  Email: info@elionpartners.com
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2 text-[#002A5C]">
                  Miami Office
                </h4>
                <p className="text-gray-700">
                  800 Brickell Avenue, Suite 1200
                  <br />
                  Miami, FL 33131
                </p>
                <p className="mt-2 text-gray-700">
                  Phone: (305) 555-5678
                  <br />
                  Email: miami@elionpartners.com
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2 text-[#002A5C]">
                  New York Office
                </h4>
                <p className="text-gray-700">
                  450 Lexington Avenue, 4th Floor
                  <br />
                  New York, NY 10017
                </p>
                <p className="mt-2 text-gray-700">
                  Phone: (212) 555-9012
                  <br />
                  Email: newyork@elionpartners.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
